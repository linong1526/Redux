import React from 'react'
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink,withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import { Html5Outlined,AlipayOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, HomeOutlined, InsertRowLeftOutlined, UsergroupAddOutlined, ReconciliationOutlined } from '@ant-design/icons';
import { withStorage,withLogin } from '@/utils/hoc';

import Login from './Login'
import Home from './Home'
import Class from './Class'
import Student from './Student'
import Subject from './Subject'

// 测试Hook
import Hooks from '../components/Hook'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

@withLogin
@withStorage('userInfo')
class Manage extends React.Component {
    constructor() {
        super()
        this.state = {
            menu: [
                {
                    path: '/home',
                    text: '首页',
                    icon: <HomeOutlined />
                },
                {
                    path: '/class',
                    text: '班级管理',
                    icon: <InsertRowLeftOutlined />,
                    children: [
                        {
                            path: '/list',
                            text: '班级列表'
                        },
                        {
                            path: '/add',
                            text: '添加班级'
                        },
                    ]
                },
                {
                    path: '/student',
                    text: '学生管理',
                    icon: <UsergroupAddOutlined />,
                    children: [
                        {
                            path: '/list',
                            text: '学生列表'
                        },
                        {
                            path: '/add',
                            text: '添加学生'
                        },
                    ]
                },
                {
                    path: '/subject',
                    text: '学科管理',
                    icon: <ReconciliationOutlined />,
                    children: [
                        {
                            path: '/list',
                            text: '学科列表'
                        },
                        {
                            path: '/add',
                            text: '添加学科'
                        },
                    ]
                },
            ],
            defaultOpenKeys:['/manage/class'],
            defaultSelectedKeys:['/manage/home']
        }

        this.changeMenu = this.changeMenu.bind(this)
    }
    changeMenu({key}){
        console.log(this.props)
        this.props.history.push(key);
    }
    logout = ()=>{
        // 清空本地存储信息
        localStorage.removeItem('userInfo');
        // this.props.history.push('/login')
        this.forceUpdate();
        location.reload();
    }
    UNSAFE_componentWillMount(){
        // 获取当前页面路径
        const {pathname} = this.props.location
        const openKeys = pathname.split('/').slice(0,3).join('/')
        console.log('openKeys',openKeys,pathname)
        this.setState({
            defaultSelectedKeys:[pathname],
            defaultOpenKeys:[openKeys]
        })
    }

    render() {
        console.log('Manage.props',this.props)
        const { menu,defaultOpenKeys,defaultSelectedKeys } = this.state;
        let {userInfo} = this.props;
        if(!userInfo){
            userInfo = {}
        }
        const {path:basePath} = this.props.match
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header" style={{ padding: '0 20px' }}>

                    <Row>
                        <Col span={18}><div className="logo">
                            <Html5Outlined className="icon"/>
                            <h1>班级管理系统</h1>
                        </div></Col>
                        <Col span={6} className="txt-right">
                            {userInfo.username} <Button type="link" onClick={this.logout}>退出</Button>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={defaultSelectedKeys}
                            defaultOpenKeys={defaultOpenKeys}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.changeMenu}
                        >
                            {
                                menu.map(item => {
                                    if (item.children) {
                                        return <SubMenu key={basePath+item.path} icon={item.icon} title={item.text}>
                                            {
                                                item.children.map(it => {

                                                    return <Menu.Item key={basePath + item.path + it.path}>{it.text}</Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    } else {
                                        return <Menu.Item key={basePath + item.path} icon={item.icon}>{item.text}</Menu.Item>

                                    }
                                })
                            }

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                {/* <Route path="/login" component={Login} /> */}
                                <Route path={basePath + "/home"} component={Home}>
                                    {/* <Home></Home> */}
                                </Route>
                                <Route path={basePath + "/class"} component={Class}/>
                                <Route path={basePath + "/student"} component={Student}/>
                                <Route path={basePath + "/subject"} component={Subject}/>
                                <Redirect from={basePath} to="/home" exact />
                            </Switch>
                            {/* <Hooks/> */}
                            <div className="goods"></div>

                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}


export default Manage;