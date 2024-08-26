const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '1234',
    database: 'bauhinia',
});

connection.connect((err) => {
    if (err) {
        console.error("Cannot Connect Because of " + err.stack);
        return;
    }
    console.log("Connection ID " + connection.threadId);
}

);

const app = express();
let PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/customer/profile/:id", (req, res) => {
    const { id, name } = req.params;
    let sql = `SELECT * FROM customer WHERE c_id='${id}';`;
    connection.query(sql, (err, response, fields) => {
        if (err) {
            console.log("Error : " + err.stack);
            return;
        }
        res.json({
            username: response[0].c_username,
            password: response[0].c_password
        })
    });

})

app.get("/user/:username", (req, res) => {
    const { username } = req.params;
    let SQL = `SELECT username,password,userRole FROM users WHERE username = '${username}'`;
    connection.query(SQL, (err, result) => {
        if (err) {
            console.log("Cannot Fetch User" + err.stack);
            return;
        }
        return res.json(result[0]);
    });

})

app.get("/staff/:username", (req, res) => {
    const { username } = req.params;
    let sql = `SELECT * FROM staff WHERE s_username = '${username}'`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.json({ Error: err.stack, Code: 500 });
        }
        console.log(result[0].s_id);
        return res.json(result[0]);

    })
})

app.get("/customer/:username", (req, res) => {
    const { username } = req.params;
    let sql = `SELECT * FROM customer WHERE c_username = '${username}'`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.logo(err.stack)
            res.json({ Error: err.stack, Code: 500 });
        }

        return res.json(result[0]);
    })
})

app.post("/newuser/add", (req, res) => {
    const {
        firstName,
        lastName,
        age,
        contact,
        email,
        username,
        password
    } = req.body


    let sql = "INSERT INTO customer(cf_name,cl_name,c_age,c_contact,c_email,c_username,c_password)VALUES(?,?,?,?,?,?,?);";
    let sql1 = "INSERT INTO users(username,password,userRole) VALUES(?,?,?);";

    connection.beginTransaction(err => {
        if (err) {
            return res.json({ Error: err.stack, Code: 500 });
        }

        connection.query(sql, [firstName, lastName, age, contact, email, username, password], (err1, response) => {
            if (err1) {
                return res.json({ Error: err1.stack, Code: 500 })
            }

            connection.query(sql1, [username, password, 'Customer'], (err2, response2) => {
                if (err2) {
                    return res.json({ Error: err2.stack, Code: 500 });
                }

                connection.commit(err3 => {
                    if (err3) {
                        return res.json({ Error: err3.stack, Code: 500 });
                    }

                    return res.json({ Message: "Account Created Successfully", UserId: response.insertId });
                });
            })
        })
    })
});

app.get("/business", (req, res) => {
    let sql1 = "SELECT COUNT(*) as pending_orders FROM order_table WHERE o_status='Pending';";
    let sql2 = "SELECT COUNT(*) as completed_orders FROM order_table WHERE o_status='Completed';";
    let sql3 = "SELECT SUM(total_amount) as Total_Income FROM order_table WHERE o_date = CURDATE()";
    let sql4 = "SELECT COUNT(c_id) as Total_Customers FROM customer;";
    let sql5 = "SELECT COUNT(p_id) as Total_Products FROM product;"
    let sql6 = "SELECT COUNT(s_id) as Total_Staff FROM staff;"

    connection.beginTransaction(err => {
        if (err) {
            return res.json({ Error: err.stack, Code: 500 });
        }
        connection.query(sql1, (err1, res1) => {
            if (err1) {
                return res.json({ Error: err1.stack, Code: 500 });
            }
            connection.query(sql2, (err2, res2) => {
                if (err2) {
                    return res.json({ Error: err2.stack, Code: 500 });
                }
                connection.query(sql3, (err3, res3) => {
                    if (err3) {
                        return res.json({ Error: err3.stack, Code: 500 });
                    }
                    connection.query(sql4, (err4, res4) => {
                        if (err4) {
                            return res.json({ Error: err4.stack, Code: 500 });
                        }
                        connection.query(sql5, (err5, res5) => {
                            if (err2) {
                                return res.json({ Error: err5.stack, Code: 500 });
                            }
                            connection.query(sql6, (err6, res6) => {
                                if (err6) {
                                    return res.json({ Error: err6.stack, Code: 500 });
                                }

                                connection.commit(err7 => {
                                    if (err7) {
                                        return res.json({ Error: err7.stack, Code: 500 });
                                    }

                                    return res.json({
                                        pendingOrders: res1[0].pending_orders,
                                        completedOrders: res2[0].completed_orders,
                                        totalIncome: res3[0].Total_Income,
                                        totalCustomers: res4[0].Total_Customers,
                                        totalProducts: res5[0].Total_Products,
                                        totalStaff: res6[0].Total_Staff
                                    });
                                })
                            })

                        })
                    })

                })

            })
        })
    })
});

app.get("/admin/orders", (req, res) => {
    let sql = "SELECT * FROM order_table ORDER BY o_id;";
    connection.query(sql, (err, response) => {
        if (err) {
            res.json({ Error: err.stack, Code: 500 });
        }
        return res.json(response);

    })
})

app.get("/admin/products", (req, res) => {
    let sql = "SELECT * FROM product;";
    connection.query(sql, (err, response) => {
        if (err) {
            res.json({ Error: err.stack, Code: 500 });
        }
        return res.json(response);

    })
})



app.post("/admin/addproduct", (req, res) => {
    let sql = "INSERT INTO product(p_name,p_batch,p_price,p_stock)VALUES(?,?,?,?);"
    const {
        p_name,
        p_batch,
        p_price,
        p_stock
    } = req.body;

    connection.query(sql, [p_name, p_batch, p_price, p_stock], (err, response) => {
        if (err) {
            console.log(err.stack);
            return res.json({ Error: err.stack, Code: 500 })
        }
        console.log(response.insertId);
        return res.json({ Message: "Product Added Successfully.", productId: response.insertId });
    })
});


app.get("/admin/orders/products/:orderid", (req, res) => {
    const { orderid } = req.params;
    let sql = `SELECT op.p_id as PID,op.qty as PQTY, p.p_name as PNAME FROM order_product op JOIN product p ON op.p_id = p.p_id WHERE o_id = ${orderid};`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.json({ Error: err.stack, Code: 500 });
        }

        return res.json(result);
    })

})





app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
})

