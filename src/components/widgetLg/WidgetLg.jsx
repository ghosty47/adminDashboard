import React from 'react'
import './widgetLg.css'

const WidgetLg = () => {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7389134/pexels-photo-7389134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Brad David</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$144.56</td>
                    <td className="widgetLgStatus"><Button type ='Approved'/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7389134/pexels-photo-7389134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Brad David</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$144.56</td>
                    <td className="widgetLgStatus"><Button type ='Declined'/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7389134/pexels-photo-7389134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Brad David</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$144.56</td>
                    <td className="widgetLgStatus"><Button type ='Pending'/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7389134/pexels-photo-7389134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Brad David</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$144.56</td>
                    <td className="widgetLgStatus"><Button type ='Approved'/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
