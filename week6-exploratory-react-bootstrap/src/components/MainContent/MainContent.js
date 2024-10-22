import './MainContent.css'
import { Container, Col, Stack, Row, Card, ProgressBar, Table } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function MainContent() {
    const activities = [
        { date: '2024-10-21', description: 'Payment Received', amount: '$150.00' },
        { date: '2024-10-20', description: 'Subscription Renewal', amount: '$9.99' },
        { date: '2024-10-19', description: 'Purchase', amount: '$25.00' },
        { date: '2024-10-18', description: 'Refund Processed', amount: '$15.00' },
        { date: '2024-10-17', description: 'Subscription Renewal', amount: '$9.99' },
        { date: '2024-10-16', description: 'Refund Processed', amount: '$150.00' },
        { date: '2024-10-15', description: 'Purchase', amount: '$60.00' },
      ];
    
      const data = [
        { name: 'Jan', uv: 400, pv: 2400 },
        { name: 'Feb', uv: 300, pv: 1398 },
        { name: 'Mar', uv: 200, pv: 9800 },
        { name: 'Apr', uv: 278, pv: 3908 },
        { name: 'May', uv: 189, pv: 4800 },
        { name: 'Jun', uv: 239, pv: 3800 },
      ];

    return (
        <div className='main-content'>
          <div className='grid-layout'> 
            <Row>

            <Col> 
            <Stack>
            <Card className='Card'>
              <Card.Body> Total Users
                <Card.Title>10,245</Card.Title>
              </Card.Body>
            </Card>

            <Card className='Card'>
              <Card.Body>Revenue
                <Card.Title>$45,678</Card.Title>
              </Card.Body>
            </Card>

           <Card className='Card recent-activity'>
            <h6>Recent User Activity</h6>
            <Table className='transaction-table' bordered>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.date}</td>
                    <td>{activity.description}</td>
                    <td>{activity.amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </Card>
            </Stack>
            </Col>

            <Col>
            <Row>
              <Col>
              <Card className='Card'>
              <Card.Body> Orders
                <Card.Title>1,234</Card.Title>
              </Card.Body>
            </Card>
              </Col>

              <Col> 
              <Card className='Card'>
              <Card.Body> Conversion Rate
                <Card.Title>2.3%</Card.Title>
              </Card.Body>
            </Card>
               </Col>
            </Row>
            <Stack>
              <Card className='Card sales-overview'>
            <h6>Sales Overview </h6>
              
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
              </Card>
              
              <Card className='Card performance-metric'>
              <h6>Performance Metrics</h6>
              <p>CPU Usage</p>
              <ProgressBar variant='secondary' now={70} />
              <p>Memory Usage</p>
              <ProgressBar variant='secondary' now={35} />
              <p>Disk Usage</p>
              <ProgressBar variant='secondary' now={85} />
              </Card>

            </Stack>
            </Col>

            </Row>
          </div>
        </div>

    )
}
export default MainContent