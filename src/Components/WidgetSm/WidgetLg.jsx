import React from "react";
import "./WidgetLg.css";
import { transActions } from "../../data";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Last TransActions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {transActions.map((transaction) => (
          <tr key={transaction.id} className="WidgetLgTr">
            <td className="WidgetLgUser">
              <img className="widgetLgImg" src={transaction.img} alt="" />
              <span className="WidgetLgName">{transaction.customer}</span>
            </td>
            <td className="WidgetLgDate">{transaction.date}</td>

            <td className="WidgetLgAmount">${transaction.amount}</td>

            <td className="WidgetLgStatus">
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
