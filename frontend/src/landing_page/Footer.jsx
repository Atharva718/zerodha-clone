function Footer() {
    return (
        <footer style={{ backgroundColor: "#FBFBFB" }}>
<div className="container mt-5 border-top" style={{ lineHeight: "2" }}>
                <div className="row mt-5">
                    {/* Logo Section */}
                    <div className="col-md-3">
                        <img src="media/images/logo.svg" alt="Zerodha Logo" style={{ width: "50%" }} />
                        <p className="mt-2">&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                    </div>

                    {/* Company Section */}
                    <div className="col-md-3">
                        <h5>Company</h5>
                        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Referral programme</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Zerodha.tech</a></li>
                            <li><a href="#">Open source</a></li>
                            <li><a href="#">Press & media</a></li>
                            <li><a href="#">Zerodha Cares (CSR)</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="col-md-3">
                        <h5>Support</h5>
                        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                            <li><a href="#">Support portal</a></li>
                            <li><a href="#">Z-Connect blog</a></li>
                            <li><a href="#">List of charges</a></li>
                            <li><a href="#">Downloads & resources</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Market overview</a></li>
                            <li><a href="#">How to file a complaint?</a></li>
                            <li><a href="#">Status of your complaints</a></li>
                        </ul>
                    </div>

                    {/* Account Section */}
                    <div className="col-md-3">
                        <h5>Account</h5>
                        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                            <li><a href="#">Open an account</a></li>
                            <li><a href="#">Fund transfer</a></li>
                        </ul>
                    </div>
                </div>

                {/* Compliance and Legal Section */}
                <div className="row mt-4 text-muted text-small" style={{ fontSize: "14px" }}>
                    <div className="col-12">
                        <small>
                            Zerodha Broking Ltd: Member of NSE, BSE, and MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238.
                            <br />
                            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                            <br />
                            For any complaints pertaining to securities broking, please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP-related issues write to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>.
                            <br />
                            Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
                            <br />
                            <a href="#">Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a>
                            <br />
                            Investments in securities markets are subject to market risks; read all the related documents carefully before investing.
                            <br />
                            Attention investors: Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. Update your e-mail and phone number with your stock broker/depository participant and receive OTP directly from the depository on your e-mail and/or mobile number to create a pledge. Check your securities, mutual funds, and bonds in the consolidated account statement issued by NSDL/CDSL every month.
                            <br />
                            Prevent unauthorized transactions in your account: Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.
                            <br />
                            KYC is a one-time exercise while dealing in securities markets - once KYC is done through a SEBI-registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo the same process again when you approach another intermediary.
                            <br />
                            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account.
                            <br />
                            <strong>As a business, we dont give stock tips</strong>, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#">create a ticket here</a>.
                        </small>
                    </div>
                </div>

                {/* Links Section */}
                <div className="row mt-4 text-center text-muted mb-1">
                    <div className="col-12">
                        <a href="#">NSE</a> &nbsp; &nbsp; <a href="#">BSE</a> &nbsp; &nbsp; <a href="#">MCX</a> &nbsp; &nbsp; <a href="#">Terms & conditions</a> &nbsp; &nbsp; <a href="#">Policies & procedures</a> &nbsp; &nbsp; <a href="#">Privacy policy</a> &nbsp; &nbsp; <a href="#">Disclosure</a> &nbsp; &nbsp; <a href="#">For investors attention</a> &nbsp; &nbsp; <a href="#">Investor charter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
