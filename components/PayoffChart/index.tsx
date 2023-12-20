import Image from "next/image";
import ddiPhone from "../../public/dd-iphone.png";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Jan',
    uv: 14000,
    pv: 14000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 13000,
    pv: 11000,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 12000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 11000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 10000,
    pv: 3500,
    amt: 2181,
  },
];

const PayoffChart = () => {
  return (
    <>
      <div className={` container p-5`}>
        <h1 className="text-center">See how Debtduction can help you</h1>
        <p className="text-center mt-3 mb-5">Enter your information below for insight on how our platform can help specifically with your debt situation.</p>
        <div className={` row align-items-center mt-2`}>

          <div className={` col-md-4 `}>
            <div className="bg-white text-secondary p-3 rounded-3">

              <div className="py-2">
                <label htmlFor="totalDebtAmt">Total student debt</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="totalDebtAmt">$</span>
                  <input type="text" className="form-control" placeholder="" aria-label="totalDebtAmt" aria-describedby="totalDebtAmt" />
                </div>
              </div>

              <div className="py-2">
                <label htmlFor="avgInt">Average interest rate</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="" aria-label="avgInt" aria-describedby="avgInt" />
                  <span className="input-group-text" id="totalDebtAmt">%</span>
                </div>
              </div>

              <div className="py-2">
                <label htmlFor="avgPayment">Average monthly payment</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="avgPayment">$</span>
                  <input type="text" className="form-control" placeholder="" aria-label="avgPayment" aria-describedby="avgPayment" />
                </div>
              </div>

              <div className="py-2">
                <label htmlFor="yearsRemaining">Years left on loans</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="" aria-label="yearsRemaining" aria-describedby="yearsRemaining" />
                </div>
              </div>

              <div className="py-2 text-center">
                <button className="btn btn-success">Calculate</button>
              </div>

            </div>
          </div>
          <div className="col-md-8 px-0 text-center pt-3 rounded" style={{ height: "457px", backgroundColor: "#004c6b" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#06799B" />
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Line type="monotone" dataKey="pv" stroke="#A6CEE3" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#1F78B4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
export default PayoffChart;