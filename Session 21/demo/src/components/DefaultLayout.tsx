import React, { useState } from 'react';
import {
    BellOutlined,
    DollarOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    ReloadOutlined,
    UsergroupAddOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps, TableProps } from 'antd';
import { Breadcrumb, Button, Layout, Menu, Table, theme } from 'antd';
import Search from 'antd/es/input/Search';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Tổng quan', '1', <PieChartOutlined />),
    getItem('Quản lý tiền lương', '2', <DollarOutlined />),
    getItem('Quản lý nhân sự', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
    ]),
    getItem('Quản lý đào tạo', 'sub2', <UsergroupAddOutlined />, [
        getItem('Bill', '4'),
    ]),
    getItem('Quản lý tài liệu', 'sub3', <FileOutlined />, [
        getItem('Alex', '5'),
    ]),
];

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        dateOfBirth: "01/01/1990",
        gender: "nam",
        email: "test@gmail.com",
        address: '10 Downing Street',
        phone: '0903458372',
    },
    {
        key: '2',
        name: 'Mike',
        dateOfBirth: "01/01/1990",
        gender: "nam",
        email: "test@gmail.com",
        address: '10 Downing Street',
        phone: '0903458372',
    },
    {
        key: '3',
        name: 'Mike',
        dateOfBirth: "01/01/1990",
        gender: "nam",
        email: "test@gmail.com",
        address: '10 Downing Street',
        phone: '0903458372',
    },
];

const columns: TableProps['columns'] = [
    {
        title: 'Họ và tên',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'dateOfBirth',
        key: 'dateOfBirth',
    },
    {
        title: 'Giới tính',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Hành động',
        key: 'phone',
        render: () => (
            <>
                <Button className='mr-[16px]'>Sửa</Button>
                <Button color='danger' variant='solid'>Xóa</Button>
            </>
        )
    }
];
function DefaultLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} className='flex justify-between'>
                    <div className='flex items-center'>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Search placeholder="input search text" style={{ width: 300 }} /></div>
                    <div>
                        <BellOutlined />
                        <UserOutlined className='m-[10px]' />
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Quản lý nhân sự' }, { title: 'Quản lý nhân viên' }, { title: 'Danh sách nhân viên' }]} />
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <div className='flex justify-between'>
                            <h1 className='text-4xl font-bold'>Nhân viên</h1>
                            <div className='text-right'>
                                <Button type='primary' className='mb-[18px]'>Thêm mới nhân viên</Button>
                                <div className='flex items-center'>
                                    <Search placeholder="input search text" style={{ width: 300 }} />
                                    <ReloadOutlined className='ml-[17px]' />
                                </div>
                            </div>
                        </div>
                        <Table dataSource={dataSource} columns={columns} className='mt-[16px]' pagination={{ current: 1, pageSize: 10, total: 100, locale: { items_per_page: "bản ghi / trang" } }} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout