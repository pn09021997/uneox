import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import "../../../css/Register.css";
export default function Register({ accountData, setAccountData }) {
    const history = useHistory();
    //Do Register
    const setRegisterInfo = (registerCheck) => {
        if (registerCheck.length !== 0) {
            Swal.fire({
                title: "Error!",
                text: "Do you want to continue ?",
                icon: "error",
                confirmButtonText: "Cool",
            });
        } else {
            setAccountData([
                ...accountData,
                {
                    id: accountData[accountData.length - 1].id + 1,
                    ...registerCheck[0],
                },
            ]);
            history.push('/login');
        }
    };

    //Get Data at Form
    const doRegister = (event, values) => {
        let email = values.email;
        let password = values.password;
        let confirmPassword = values.confirmPassword;
        let birthday = values.birthday;
        let phone = values.phone;
        let fullname = values.fullname;

        let infoRegister = [
            {
                username: email,
                password: password,
                confirmPassword: confirmPassword,
                fullname: fullname,
                birthday: birthday,
                phone: phone,
            },
        ];

        let registerCheck = accountData.filter((value, index) => {
            return validateForm(infoRegister, value) === true;
        });
        setRegisterInfo(registerCheck);
    };

    //Check Register Info
    const validateForm = (infoRegister, accountData) => {
        let flag = true;
        infoRegister.username === accountData.username
            ? (flag = false)
            : (flag = true);

        return flag;
    };

    const handleInvalidSubmit = (event, errors, values) => {
        Swal.fire({
            title: "Error!",
            text: "Do you want to continue ?",
            icon: "error",
            confirmButtonText: "Cool",
        });
    };

    return (
        <div className="register container">
            <h1 className="register-title text-center">REGISTER</h1>
            <AvForm
                onValidSubmit={doRegister}
                onInvalidSubmit={handleInvalidSubmit}
            >
                <AvField
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="Email here..."
                    validate={{
                        required: {
                            value: true,
                            errorMessage: "Please enter your email",
                        },
                        email: {
                            value: true,
                            errorMessage: "Your email not correct",
                        },
                    }}
                />
                <AvField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Password here..."
                    validate={{
                        required: {
                            value: true,
                            errorMessage: "Please enter your password",
                        },
                        pattern: {
                            value: "^[A-Za-z0-9]+$",
                            errorMessage:
                                "Your password must be composed only with letter and numbers",
                        },
                        minLength: {
                            value: 6,
                            errorMessage:
                                "Your password must be between 6 and 16 characters",
                        },
                        maxLength: {
                            value: 16,
                            errorMessage:
                                "Your password must be between 6 and 16 characters",
                        },
                    }}
                />
                <AvField
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm Password here..."
                    type="password"
                    validate={{
                        required: {
                            value: true,
                            errorMessage: "Please enter your password",
                        },
                        pattern: {
                            value: "^[A-Za-z0-9]+$",
                            errorMessage:
                                "Your password must be composed only with letter and numbers",
                        },
                        minLength: {
                            value: 6,
                            errorMessage:
                                "Your password must be between 6 and 16 characters",
                        },
                        maxLength: {
                            value: 16,
                            errorMessage:
                                "Your password must be between 6 and 16 characters",
                        },
                    }}
                />
                <AvField
                    name="fullname"
                    label="Fullname"
                    placeholder="Fullname here..."
                    type="text"
                    validate={{
                        required: {
                            value: true,
                            errorMessage: "Please enter your fullname",
                        },
                        pattern: {
                            value: "^[A-Za-z]+$",
                            errorMessage:
                                "Your password must be composed only with letter",
                        },
                        minLength: {
                            value: 6,
                            errorMessage:
                                "Your password must be between 6 and 16 characters",
                        },
                        maxLength: {
                            value: 16,
                            errorMessage:
                                "Your password must be between 6 and 16 characters",
                        },
                    }}
                />
                <AvField
                    name="birthday"
                    label="Birthday"
                    type="date"
                    validate={{
                        required: {
                            value: true,
                            errorMessage: "Please enter your birthday",
                        },
                    }}
                />
                <AvField
                    name="phone"
                    label="Phone"
                    placeholder="Phone here..."
                    type="tel"
                    validate={{
                        required: {
                            value: true,
                            errorMessage: "Please enter your phone",
                        },
                    }}
                />
                <Button
                    type="submit"
                    color="secondary"
                    className="btn-md btn-block"
                >
                    Register
                </Button>
                <Link to="/login">
                    <Button
                        color="outline-secondary"
                        className="btn-md btn-block mt-2"
                    >
                        Back to Login
                    </Button>
                </Link>
            </AvForm>
        </div>
    );
}