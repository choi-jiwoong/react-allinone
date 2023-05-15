import React from 'react'
import { UpOutlined, CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';

export default function IconExample() {
  return (
    <div>
      <UpOutlined size="lange" />
      <CaretDownOutlined />

      <Space direction="vertical">
        <Space wrap>
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />} loading={true} >
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Space>
        <Space wrap>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </Space>
      </Space>
    </div>
  )
}
