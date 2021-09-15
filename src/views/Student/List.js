import React,{useCallback, useEffect, useMemo, useState} from 'react'
import { Button, Table, Popconfirm, message, Row, Col } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import request from '@/utils/request'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

function List(props) {
    const [datalist,setDatalist] = useState([])
    const [selectedRowKeys,setSelectedRowKeys] = useState([])
    const [total,setTotal] = useState(0)
    const [page,setPage] = useState(1)
    const [pageSize,setPageSize] = useState(10)

    const history = useHistory()

    // 函数封装
    const getData = useCallback(async ()=>{
        const {data} = await request.get('/user',{
            page,
            pageSize
        })
        setDatalist(data.result)
        setTotal(data.total)
    },[page,pageSize])

    const addItem = useCallback(()=>{
        history.push('/manage/student/add')
    },[])
    const editItem = useCallback((id)=>{
        history.push('/manage/student/edit/'+id)
    },[])
    const deleteItem = useCallback(async (id)=>{
        const data = await request.delete('/user/' + id)
        if (data.code === 204) {
            message.success('删除成功')

            // 删除成功后操作
            getData()
        } else {
            message.error('删除失败')
        }
    },[])
    const deleteItems = useCallback(()=>{

    },[])
    
    // 使用useMemo优化初始代码
    const {columns,rowSelection} = useMemo(()=>{
        const columns = [
            {
                title:'#',
                width:40,
                render(text,row,index){
                    return index+1
                }
            },
            {
                title: '学生姓名',
                dataIndex: 'username',
                // 控制数据显示格式
                render: (text, row, index) => {
                    //   console.log('text',text,row,index)
                    return (
                        <div>{text}</div>
                    )
                },
            },
            {
                title: '添加时间',
                dataIndex: 'add_time',
                render(text) {
                    return moment(text).format('YYYY/MM/DD')
                }
            },
            {
                title: '操作',
                width: 100,
                render: (row) => {
                    return (
                        <>
                            <Button type="primary" size="small" ghost onClick={editItem.bind(this,row._id)}>编辑</Button>
                            <Popconfirm
                                title="确认删除"
                                onConfirm={deleteItem.bind(this, row._id)}
                                okText="确认"
                                cancelText="取消"
                            >
                                <Button type="primary" size="small" ghost danger>删除</Button>
                            </Popconfirm>
                        </>
                    )
                }
            },
        ];
        const rowSelection = {
            type: 'checkbox',
            onChange: (selectedRowKeys) => {
                setSelectedRowKeys(selectedRowKeys)
            }
        }
        return {
            columns,
            rowSelection,
        }
    },[])

    const pagination = useMemo(()=>{
        const pagination = {
            size: 'small',
            total,
            pageSize,
            showTotal(total) {
                return `共 ${total} 条记录`
            },
            onChange: (page, pageSize) => {
                console.log('page', page, pageSize)
                setPage(page);
                setPageSize(pageSize)
            }
        }
        return pagination
    },[total,pageSize])
    
    

    useEffect(()=>{
        getData()
    },[page,pageSize])
    return (
        <div>
            <Row gutter={20}>
                <Col span={12}><Button type="primary" icon={<PlusOutlined />} onClick={addItem}>添加班级</Button></Col>
                <Col span={12} className="txt-right">
                    <Popconfirm
                        title="确认删除"
                        onConfirm={deleteItems}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Button type="primary" danger icon={<DeleteOutlined />}>批量删除</Button>
                    </Popconfirm>
                </Col>
            </Row>
            <Table
                style={{ marginTop: 20 }}
                rowKey="_id"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={datalist}
                pagination={pagination}
            />

        </div>
    )
}

export default List;