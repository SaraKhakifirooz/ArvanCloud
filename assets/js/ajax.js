
function sendForm() {

    if (validate()) {
        let fullname = document.getElementById("fullname").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let companyname = document.getElementById("companyname").value;
        let resume = document.getElementById("resume").value;
        let portfolio = document.getElementById("portfolio").value;
        let abryarkind = document.getElementById("abryarkind").value;
        let abarlevel = document.getElementById("abarlevel").value;
        let description = document.getElementById("description").value;



        let url = "https://coda.io/apis/v1/docs/lfou9rUA2c/tables/grid-B8h9KHUXJl/rows";
        let token = "bearer 319a41ff-70db-41c1-9104-4244b2cd02aa";
        let model = {
            "rows": [
                {
                    "cells": [
                        { "column": "c-rEJZJYvS6R", "value": fullname },
                        { "column": "c-i0BpdNI0La", "value": phone },
                        { "column": "c-O7EiblZ5Tx", "value": email },
                        { "column": "c-srhz2jAF0m", "value": companyname },
                        { "column": "c-YV_uSBPbzn", "value": resume },
                        { "column": "c-x95-0lbZDY", "value": portfolio },
                        { "column": "c-EcCBq3z078", "value": abryarkind },
                        { "column": "c-Pl9WhYE7XL", "value": abarlevel },
                        { "column": "c-9Mw7aAUCJ7", "value": description }
                    ]
                }
            ]
        }


        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('authorization', token);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(model));


        alert("پیام شما با موفقیت ثبت شد:)")
    }
    else {
        alert("در وارد کردن اطلاعات دقت بفرمایید:|")
    }
}