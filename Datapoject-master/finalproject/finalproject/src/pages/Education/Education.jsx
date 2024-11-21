import "../Education/style.css";
import Persons from "../Education/assets/persons-item.svg";
import Schedule from "../Education/assets/schedule.svg";
import Schedulenone from "../Education/assets/schedulenone.svg";
import Clock from "../Education/assets/clockyel.svg";
import Blueupvector from "../Education/assets/vectorblueup.svg";
import Greenupvector from "../Education/assets/vectorgreen.svg";
import Redvectordown from "../Education/assets/redvectordown.svg";
import Yellowdown from "../Education/assets/yellowdown.svg";
import Treedot from "../Sidebar/assets/icons/dot.svg";
import Graphic from "../Education/assets/graphic.svg";
import Dotblue from "../Education/assets/Dot (2).svg";
import Dotlightblue from "../Education/assets/Dot (3).svg";
import { useState } from "react";
import Ellipseblue from "../Education/assets/Ellipse.svg";
import Ellipselightblue from "../Education/assets/Ellipse (1).svg";
import Ellipseorange from "../Education/assets/Ellipse (2).svg";
import Progresbar from "../Education/assets/Progress Bar (1).svg";
const Education = () => {
  const initialInvoices = [
    {
      id: 1,
      invoiceId: "#874729",
      customer: "Cahaya Dewi",
      date: "08/09/23",
      amount: 728,
    },
    {
      id: 2,
      invoiceId: "#874730",
      customer: "Samantha Olie",
      date: "02/11/22",
      amount: 182,
    },
    {
      id: 3,
      invoiceId: "#874731",
      customer: "Daniel Gallego",
      date: "22/08/23",
      amount: 456,
    },
    {
      id: 4,
      invoiceId: "#874732",
      customer: "Avery Davis",
      date: "02/12/22",
      amount: 359,
    },
    {
      id: 5,
      invoiceId: "#874733",
      customer: "Taylor Alonso",
      date: "13/04/23",
      amount: 224,
    },
  ];
  const [invoices, setInvoices] = useState(initialInvoices);
  const [editInvoiceId, setEditInvoiceId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    customer: "",
    date: "",
    amount: "",
  });
  const handleEditClick = (invoice) => {
    setEditInvoiceId(invoice.id);
    setEditFormData({
      customer: invoice.customer,
      date: invoice.date,
      amount: invoice.amount,
    });
  };

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    const updatedInvoices = invoices.map((invoice) =>
      invoice.id === editInvoiceId ? { ...invoice, ...editFormData } : invoice
    );
    setInvoices(updatedInvoices);
    setEditInvoiceId(null);
  };

  const handleCancelClick = () => {
    setEditInvoiceId(null);
  };

  const handleDelete = (id) => {
    const filteredInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(filteredInvoices);
  };

  return (
    <>
      <section>
        <div className="person-statitstics">
          <div className="person-item">
            <div>
              <img src={Persons} alt="pesrons-icon" />
            </div>
            <div className="person-item-text">
              <p>1,253</p>
              <p>Total Students</p>
            </div>
            <div>
              <button className="button-blue-up">
                <img src={Blueupvector} alt="blueup" />
                <p>25%</p>
              </button>
            </div>
          </div>

          <div className="person-item-green">
            <div>
              <img src={Schedule} alt="schedule" />
            </div>
            <div className="person-item-text">
              <p>93%</p>
              <p>Daily Attendance</p>
            </div>
            <div>
              <button className="button-blue-up">
                <img src={Greenupvector} alt="green vector up " />
                <p>15%</p>
              </button>
            </div>
          </div>

          <div className="person-item-red">
            <div>
              <img src={Schedulenone} alt="none schodule" />
            </div>
            <div className="person-item-text">
              <p>145</p>
              <p>Absences(Today)</p>
            </div>
            <div>
              <button className="button-red-down">
                <img src={Redvectordown} alt="red vector down" />
                <p>5%</p>
              </button>
            </div>
          </div>

          <div className="person-item-yellow">
            <div>
              <img src={Clock} alt="clock icon" />
            </div>
            <div className="person-item-text">
              <p>65</p>
              <p>Late Arrivals(Today)</p>
            </div>
            <div>
              <button className="button-yellow-down">
                <img src={Yellowdown} alt="yellow down" />
                <p>5%</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-weekly-userlist">
        <div className="weekly-container">
          <div>
            <div className="weekly-target-container-header">
              <p>Weekly Target</p>
              <img src={Treedot} alt="tree dot svg" />
            </div>
            <div className="Border-vertical"></div>
          </div>
          <div className="border-vertical"></div>

          <div className="container-medium">
            <div className="left-container-text">
              <h7 style={{ fontSize: "60px", margin: "0px" }}>38,482</h7>
              <div className="button-text-container">
                <button className="green-up-button-bg">
                  <img src={Greenupvector} alt="" />
                  25%
                </button>
                <p>from last month</p>
              </div>
            </div>
            <div className="horziontal-vector"></div>
            <div>
              <div className="button-blue-container">
                <p className="text-item">19,241</p>
                <button className="button-blue">50%</button>
              </div>
              <div className="complated-container">
                <img src={Ellipseblue} alt="blue ellipse" />
                <p>Completed</p>
              </div>
            </div>
            <div>
              <div className="button-blue-container">
                <p className="text-item">8,394</p>
                <button className="button-light-blue">25%</button>
              </div>
              <div className="complated-container">
                <img src={Ellipselightblue} alt="light blue ellipse " />
                <p>In progress</p>
              </div>
            </div>
            <div>
              <div className="button-blue-container">
                <p className="text-item">1,589</p>
                <button className="button-orange">6%</button>
              </div>
              <div className="complated-container">
                <img src={Ellipseorange} alt="orange ellipse" />
                <p>Pending</p>
              </div>
            </div>
          </div>
          <div className="container-medium-footer">
            <img src={Progresbar} alt="progress bar static for now" />
          </div>
        </div>

        <div className="wekly-container-right">
          <div className="wekly-container-right-header">
            <p>Progress</p>
            <img src={Treedot} alt="tredotmenu" />
          </div>
          <div className="graphic-with-vector">
            <img src={Graphic} alt="graphic with vector" />
          </div>
          <div className="buttons-container">
            <div className="button-left">
              <button className="button-with-dot-blue">
                <img src={Dotblue} alt="dot blue" />
                <p>Complated</p>
              </button>
              <p>32,948</p>
              <p>Total tasks</p>
            </div>
            <div className="vertical-vector"></div>
            <div className="">
              <button className="button-with-dot-light-blue">
                <img src={Dotlightblue} alt="dot light blue" />
                <p>Complated</p>
              </button>
              <p>32,948</p>
              <p>Total tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* section userlist */}
      <section className="user-list">
        <div className="user-list-left">
          <div>
            <p> Task Lists</p>
            <img src={Treedot} alt="treedot menu" />
          </div>
          <div>
            <div style={{ padding: "0px" }}>
              <table className="table-invoices">
                <thead>
                  <tr
                    style={{
                      borderBottom: "2px solid #ddd",
                      backgroundColor: "rgba(247, 248, 250, 1)",
                    }}
                  >
                    <th style={{ padding: "10px" }}>No</th>
                    <th style={{ padding: "10px" }}>Invoice ID</th>
                    <th style={{ padding: "10px" }}>Customer</th>
                    <th style={{ padding: "10px" }}>Date</th>
                    <th style={{ padding: "10px" }}>Amount</th>
                    <th style={{ padding: "10px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, index) => (
                    <tr
                      key={invoice.id}
                      style={{ borderBottom: "1px solid #ddd" }}
                    >
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {index + 1}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {invoice.invoiceId}
                      </td>
                      {editInvoiceId === invoice.id ? (
                        <>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              className="input-customer"
                              type="text"
                              name="customer"
                              value={editFormData.customer}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              className="input-customer"
                              type="text"
                              name="date"
                              value={editFormData.date}
                              onChange={handleEditFormChange}
                              style={{ width: "100%" }}
                            />
                          </td>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              className="input-customer"
                              type="number"
                              name="amount"
                              value={editFormData.amount}
                              onChange={handleEditFormChange}
                              style={{ width: "100%" }}
                            />
                          </td>
                          <td className="xokeycontainer">
                            <img
                              className="okeyxbutton"
                              src=""
                              alt="okeyicon"
                              onClick={handleSaveClick}
                            />
                            <img
                              className="xbutton"
                              src=""
                              alt=""
                              onClick={handleCancelClick}
                            />
                          </td>
                        </>
                      ) : (
                        <>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            {invoice.customer}
                          </td>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            {invoice.date}
                          </td>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            ${invoice.amount}
                          </td>
                          <td className="Td-editdelete">
                            <img
                              style={{ height: "30px", cursor: "pointer" }}
                              onClick={() => handleEditClick(invoice)}
                              src=""
                              alt="edit icon"
                            />
                            <img
                              style={{ height: "30px", cursor: "pointer" }}
                              onClick={() => handleDelete(invoice.id)}
                              src=""
                              alt=""
                            />
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
