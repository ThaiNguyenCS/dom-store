import React from "react";
import styles from "./Header.module.css";
import dropMenuStyles from "./DropdownMenu.module.css";
import dummyLogo from "../assets/dummy_logo.png";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import DropdownMenu from "./DropdownMenu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// logo + name, navigation, cart

const Header = () => {
    const navigate = useNavigate();
    const appStatus = useSelector((state) => state.appState);
    console.log(appStatus);

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["logo-container"]}>
                    <Link to={"/"}>
                        <img src={dummyLogo} alt="App Logo" className={styles["app-logo"]} />
                    </Link>
                </div>
                <nav className={styles["navigation-container"]}>
                    <div className={styles["nav-button-container"]}>
                        GIÀY NAM
                        <div className={styles["dropdown-menu-wrapper"]}>
                            <DropdownMenu parentNav={0} />
                        </div>
                    </div>
                    <div className={styles["nav-button-container"]}>
                        GIÀY NỮ
                        <div className={styles["dropdown-menu-wrapper"]}>
                            <DropdownMenu parentNav={1} />
                        </div>
                    </div>
                    <div className={styles["nav-button-container"]}>
                        TRẺ EM
                        <div className={styles["dropdown-menu-wrapper"]}>
                            <DropdownMenu parentNav={2} />
                        </div>
                    </div>
                </nav>
                <div className={styles["action-container"]}>
                    {appStatus?.isLogined ? (
                        <div
                            className={styles["action-button"]}
                            style={{ marginRight: "10px" }}
                            onClick={(e) => {   
                                navigate("/profile");
                            }}
                        >
                            <FaRegUser className={styles["action-icon"]} />
                        </div>
                    ) : (
                        <>
                            <div style={{ marginRight: "10px" }}>
                                <Link to={"/login"}>Đăng nhập</Link>
                            </div>
                        </>
                    )}

                    <div
                        className={styles["action-button"]}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate("/cart");
                        }}
                    >
                        <FiShoppingCart className={styles["action-icon"]} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
