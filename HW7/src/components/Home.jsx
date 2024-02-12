import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchContent } from "../reduxtoolkit/reducer";
import { Card, Col, Row } from 'antd';

function Home() {
  let usersArray = useSelector((state) => state.goods.usersArray)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [])


  return (
    <div >
      <h1>ALL GOODS</h1>
      <Row gutter={16}>
        {usersArray.map((item) => {
          return (
            <Col span={6}>
            <Card title={item.product_name} bordered={false}>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <p>{item.store_name}</p>
              <p>{item.store_address}</p>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Home
