import { Button, Input, Select, Table, Tag, type TableProps } from "antd"
import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  img: string;
  date: string;
  status: string;
}

const columns: TableProps<Post>['columns'] = [
  {
    title: 'STT',
    render: (_, __, index) => <>{index + 1}</>,
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'img',
    key: 'img',
    render: (text) => <img src={text} className="w-[30px] h-[30px] rounded-[50%]"></img>
  },
  {
    title: 'Ngày viết',
    key: 'date',
    dataIndex: 'date',
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    render: (text) => (
      text === "Đã xuất bản" ?
        <Tag color="green">{text}</Tag>
        : <Tag color="red">{text}</Tag>
    )

  },
  {
    title: 'Chức năng',
    render: () =>
      <>
        <Button variant="solid" color="default" className="!bg-amber-500 !text-white mr-2" >Chặn</Button>
        <Button variant="outlined" color="default" className="mr-2 !bg-[#fff7e6] !border-amber-500 !text-amber-500">Sửa</Button>
        <Button variant="outlined" color="danger" className="!bg-[#fff1f0]">Xóa</Button>
      </>
  },
];

function App() {
  let [posts, setPosts] = useState<Post[]>([])
  let pageSize = 3;
  let [currentPage, setCurrentPage] = useState(1)
  let [total, setTotal] = useState(0)
  useEffect(() => {
    fetchData()
  }, [currentPage])
  //B1: Lấy dữ liệu từ server (axios)
  async function fetchData() {
    try {
      console.log(currentPage);
      let res = await axios.get(`http://localhost:3000/posts?_page=${currentPage}&_per_page=${pageSize}`)
      setPosts(res.data.data)
      setTotal(res.data.items)
    } catch {
      console.log("lỗi");
    }
  }
  //B2: Quản lý dữ liệu thông qua state
  //B3: Gọi hàm sử dụng hook useEffect
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="flex">
          <Input placeholder="Nhập từ khóa tìm kiếm" className="!mr-4"></Input>
          <Select
            defaultValue="Lọc bài viết"
            style={{ width: 120 }}
            options={[
              { value: 'Đã xuất bản', label: 'Đã xuất bản' },
              { value: 'Chưa xuất bản', label: 'Chưa xuất bản' },
            ]}
          />
        </div>
        <Button type="primary">Thêm mới bài viết</Button>
      </div>
      <Table<Post>
        columns={columns}
        dataSource={posts}
        pagination={{
          pageSize: pageSize,
          total: total,
          current: currentPage,
          onChange: (page) => {
            setCurrentPage(page)
          }
        }}
        className="mt-4" rowKey="id" />
    </div>
  )
}

export default App