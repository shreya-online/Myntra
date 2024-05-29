import React from 'react';
import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import Header from '../Navbar/SignUpHeader'


const StyledTypography = styled(Typography)`
  color: #7E818C;
  fontFamily: "Hind Madurai", sans-serif;
  fontWeight: 300;
  fontStyle: normal;
  fontSize: 12px;
`;

const StyledList = styled.li`
  color: #7E818C;
  fontFamily: "Hind Madurai", sans-serif;
  fontWeight: 300;
  fontStyle: normal;
  fontSize: 12px;
`;

function TermsPage(){
    return(
        <>
        <Header />
        <Typography variant="h6" style={{margin:"30px 570px", alignContent:"center", alignContent: "center"}}>MYNTRA: TERMS OF USE</Typography>
        <Grid style={{margin: "40px 270px 40px"}}>
            {/* <Grid component="span"sx={{ display: "inline-block", mx: "100px", transform: "scale(0.8)",}} > */}
            
            <StyledTypography variant="body2">Welcome to Myntra.This document is an electronic record in terms of Information Technology Act, 2000
                 and published in accordance with the provisions of Rule 3 ) of the Information Technology (Intermediaries guidelines) 
                 Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of
                  Myntra marketplace platform - www.myntra.com (hereinafter referred to as "Platform")</StyledTypography> <br />
            <StyledTypography variant="body2" >The Platform is owned by Myntra Designs Private Limited, having its registered office at Buildings Alyssa, Begonia 
                and Clover situated in Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Varthur Hobli, 
                Bengaluru – 560103, India and its branch office at Plot 82 A - 2nd and 3rd Floor, Sector 18 Gurugram Haryana, India.</StyledTypography> <br />
            <StyledTypography variant="body2">Your use of the Myntra and services and tools are governed by the following terms and conditions 
                ("<strong>Terms of Use</strong>") as applicable to the Myntra including the applicable policies which are incorporated 
                herein by way of reference. By mere use of the Myntra, You shall be contracting with Myntra Designs Private Limited, 
                the owner of the Platform. These terms and conditions including the policies constitute Your binding obligations, 
                with Myntra.</StyledTypography> <br />
            <StyledTypography variant="body2">For the purpose of these Terms of Use, wherever the context so requires "<strong>You</strong>" 
                or "<strong>User</strong>" shall mean any natural or legal person who has agreed to become a buyer on Platform by providing 
                data while registering on the Platform as Registered User. The term "<strong>Myntra</strong>","<strong>We</strong>","
                <strong>Us</strong>","<strong>Our</strong>" shall mean Myntra Designs Private Limited and its affiliates.</StyledTypography><br />
            <StyledTypography variant="body2">When You use any of the services provided by Us through the Platform, including but not limited to, (e.g. Product Reviews, 
                Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed 
                to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms of Use. We reserve the right, at Our sole 
                discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. 
                You shall ensure to review these Terms of Use periodically for updates/changes. Your continued use of the Platform following the posting of changes will 
                mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, 
                limited privilege to enter and use the Platform. By impliedly or expressly accepting these Terms of Use, You also accept and agree to be bound by Myntra 
                Policies including but not limited to Privacy Policy as amended from time to time.</StyledTypography>


            <Typography variant="h6" style={{marginTop: "40px"}}><strong>1. User Account, Password, and Security:</strong></Typography><br />

            <StyledTypography variant="body2">If You use the Platform, You shall be responsible for maintaining the confidentiality of your Display Name and Password and You shall be responsible 
                for all activities that occur under your Display Name and Password. You agree that if You provide any information that is untrue, inaccurate, not current or incomplete or 
                not in accordance with this Terms of Use, We shall have the right to indefinitely suspend or terminate or block Your access on the Platform.</StyledTypography><br />
            <StyledTypography variant="body2">If there is reason to believe that there is likely to be a breach of security or misuse of Your account, We may request You to change the password 
                or we may suspend Your account without any liability to Myntra, for such period of time as we deem appropriate in the circumstances. We shall not be liable for any loss 
                or damage arising from Your failure to comply with this provision.</StyledTypography><br />
            <StyledTypography variant="body2">In the event of a device being associated with multiple logins or sign ups, as a measure to enhance customer's security and privacy as well as 
                safeguarding your sensitive information for any potential risks, Myntra sometimes consider moderating users and their association with devices while using the Myntra app 
                or website.</StyledTypography><br />
            <StyledTypography variant="body2">Your mobile phone number is treated as Your primary identifier on the Platform. It is your responsibility to ensure that Your mobile phone number 
                and your email address is up to date on the Platform at all times. You agree to notify Us promptly if your mobile phone number or e-mail address changes by updating 
                the same on the Platform through an OTP verification. You agree that Myntra shall not be liable or responsible for the activities or consequences of use or misuse of any 
                information that occurs under your Account in cases, including, where You have failed to update Your revised mobile phone number and/or e-mail address on the Platform. 
                You agree to immediately notify Myntra of any unauthorized use/breach of your password or account.</StyledTypography><br />
            <StyledTypography variant="body2">If You share or allow others to have access to Your account on the Platform ("Account"), by creating separate profiles under Your Account, or 
                otherwise, they will be able to view and access Your Account information, You shall be solely liable and responsible for all the activities undertaken under Your Account, 
                and any consequences therefrom.</StyledTypography><br />
            <StyledTypography variant="body2">If You have not accessed Platform for a period of 2 (two) Years, Your data (including transactional data) will be deleted from Our record and 
                You will not be able to access such data.</StyledTypography><br />


            <Typography variant="h6" style={{marginTop: "40px"}}><strong>2. Services Offered:</strong></Typography><br />
            
            <StyledTypography variant="body2" >Myntra provides a number of Internet-based services through the Platform. One such Service enables Users to purchase original merchandise 
                such as clothing, footwear and accessories from various fashion and lifestyle brands (collectively, "Products"). The Products can be purchased through the 
                Platform through various methods of payments offered. The sale/purchase of Products shall be additionally governed by specific policies of sale, like cancellation policy, 
                exchange policy, return policy, etc. (which are found on the FAQ tab on the Platform and all of which are incorporated here by reference). It is clarified that at the time 
                of creating a return request, users are required to confirm (via a check box click) that the product being returned is unused and has the original tags intact. 
                If the product returned by the user is used, damaged or if the original tags are missing, the user’s return request shall be declined, and the said product shall 
                be re-shipped back to the customer. In the event that the return request is declined, the user shall not be eligible for a refund, and Myntra assumes no liability 
                in this regard. Further, in the event that the user fails to accept the receipt of the said re-shipped product, the user shall continue to be not eligible for a 
                refund, and Myntra assumes no liability with respect to the return or refund for the said re-shipped product. In addition, these Terms of Use may be further 
                supplemented by Product specific conditions, which may be displayed with that Product</StyledTypography><br />
            <StyledTypography variant="body2" >Myntra does not warrant that Product description or other content on the Platform is accurate, complete, reliable, current, or error-free 
                and assumes no liability in this regard.</StyledTypography><br />
            

            <Typography variant="h6" style={{marginTop: "40px"}}><strong>3. Platform for Transaction and Communication:</strong></Typography><br />
            
            <StyledTypography variant="body2" >The Users utilize to meet and interact with one another for their transactions on the Platform. Myntra is not and cannot be a party to or 
                control in any manner any transaction between the Myntra's Users. Henceforward:</StyledTypography>
                <ul style={{ listStyleType: 'disc' }}>
                    <StyledList>All commercial/contractual terms are offered by and agreed to between Buyers and Sellers alone. The commercial/contractual terms include without limitation price, 
                        shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services and after sales services related to 
                        products and services. Myntra does not have any control or does not determine or advise or in any way involve itself in the offering or acceptance of such 
                        commercial/contractual terms between the Buyers and Sellers.</StyledList>
                    <StyledList>Myntra does not make any representation or Warranty as to specifics (such as quality, value, salability, etc) of the products or services proposed to be 
                        sold or offered to be sold or purchased on the Platform.</StyledList>
                    <StyledList>Myntra is not responsible for any non-performance or breach of any contract entered into between Buyers and Sellers. Myntra cannot and does not 
                        guarantee that the concerned Buyers and/or Sellers will perform any transaction concluded on the Platform.</StyledList>
                    <StyledList>At no time shall Myntra hold any right, title or interest over the products nor shall Myntra have any obligations or liabilities in respect of such 
                        contract entered into between Buyers and Sellers.</StyledList>
                    <StyledList>The Myntra is only a platform that can be utilized by Users to reach a larger base to buy and sell products or services. Myntra is only providing a platform for 
                        communication and it is agreed that the contract for sale of any of the products or services shall be a strictly bipartite contract between the Seller and the Buyer. 
                        At no time shall Myntra hold any any right, title or interest over the products nor shall Myntra have any obligations or liabilities in respect of such contract. 
                        Myntra is not responsible for unsatisfactory or delayed performance of services or damages or delays as a result of products which are out of stock, unavailable or back ordered.</StyledList>
                    <StyledList>Pricing on any product(s) as is reflected on the Platform may due to some technical issue, typographical error or product information published by seller may be 
                        incorrectly reflected and in such an event seller may cancel such your order(s).</StyledList>
                    <StyledList>You release and indemnify Myntra and/or any of its officers and representatives from any cost, damage, liability or other consequence of any of the actions of 
                        the Users of the Myntra and specifically waive any claims that you may have in this behalf under any applicable law. Notwithstanding its reasonable efforts in that 
                        behalf, Myntra cannot take responsibility or control the information provided by other Users which is made available on the Platform.</StyledList>
                </ul>


            <Typography variant="h6" style={{marginTop: "40px"}}><strong>4. User Conduct and Rules on the Platform:</strong></Typography><br />
            
            <StyledTypography variant="body2" >You agree, undertake and confirm that Your use of the Platform shall be strictly governed by the following binding principles:</StyledTypography>
            <StyledTypography variant="body2" >You shall not host, display, upload, modify, publish, transmit, update or share any information which:</StyledTypography>
                <ul style={{ listStyleType: 'disc' }}>
                    <StyledList>belongs to another person and to which You do not have any right to</StyledList>
                    <StyledList>is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, 
                        ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever</StyledList>
                    <StyledList>is misleading in any way</StyledList>
                    <StyledList>involves the transmission of "junk mail", "chain letters", or unsolicited mass mailing or "spamming"</StyledList>
                    <StyledList>promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libellous</StyledList>
                    <StyledList>infringes upon or violates any third party's rights including, but not limited to, intellectual property rights, rights of privacy (including without limitation 
                        unauthorized disclosure of a person's name, email address, physical address or phone number) or rights of publicity</StyledList>
                    <StyledList>contains restricted or password-only access pages, or hidden pages or images (those not linked to or from another accessible page)</StyledList>
                    <StyledList>provides instructional information about illegal activities such as making or buying illegal weapons, violating someone's privacy, or providing or creating 
                        computer viruses</StyledList>
                    <StyledList>contains video, photographs, or images of another person (with a minor or an adult).</StyledList>
                    <StyledList>tries to gain unauthorized access or exceeds the scope of authorized access to the Platform or to profiles, blogs, communities, account information, bulletins, 
                        friend request, or other areas of the Platform or solicits passwords or personal identifying information for commercial or unlawful purposes from other users</StyledList>
                    <StyledList>interferes with another USER's use and enjoyment of the Platform or any other individual's User and enjoyment of similar services</StyledList>
                    <StyledList>infringes any patent, trademark, copyright or other proprietary rights or third party's trade secrets or rights of publicity or privacy or shall not be fraudulent
                         or involve the sale of counterfeit or stolen products</StyledList>
                    <StyledList>violates any law for the time being in force</StyledList>
                    <StyledList>threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to 
                        thecommission of any cognizable offence or prevents investigation of any offence or is insulting any other nation</StyledList>
                    <StyledList>shall not be false, inaccurate or misleading</StyledList>
                    <StyledList>shall not create liability for Us or cause Us to lose (in whole or in part) the services of Our internet service provider ("ISPs") or other suppliers</StyledList>
                </ul>
            <StyledTypography variant="body2" >A User may be considered fraudulent or loss to business due to fraudulent activity if any of the following scenarios are met:</StyledTypography>
                <ul style={{ listStyleType: 'disc' }}>
                    <StyledList>Users doesn't reply to the payment verification mail sent by Myntra</StyledList>
                    <StyledList>Users fails to produce adequate documents during the payment details verification</StyledList>
                    <StyledList>Misuse of another Users's phone/email</StyledList>
                    <StyledList>Users uses invalid address, email and phone no.</StyledList>
                    <StyledList>Overuse of a voucher code</StyledList>
                    <StyledList>Use of a special voucher not tagged to the email ID used.</StyledList>
                    <StyledList>Users returns the wrong product</StyledList>
                    <StyledList>Users refuses to pay for an order</StyledList>
                    <StyledList>Users involved in the snatch and run of any order</StyledList>
                    <StyledList>Miscellaneous activities conducted with the sole intention to cause loss to business/revenue to Myntra</StyledList>
                    <StyledList>User with excessive returns</StyledList>
                    <StyledList>Repeated request for monetary compensation for fake/used order</StyledList>
                </ul>
            <StyledTypography variant="body2" >Myntra may cancel any order that classify as 'Bulk Orders'/'Fraud orders' under certain criteria at any stage of the product delivery. 
                An order can be classified as 'Bulk Order'/'Fraud Order' if it meets with the below mentioned criteria, and any additional criteria as defined by Myntra:</StyledTypography>
                <ul style={{ listStyleType: 'disc' }}>
                    <StyledList>Products ordered are not for self-consumption but for commercial resale</StyledList>
                    <StyledList>Multiple orders placed for same product at the same address, depending on the product category.</StyledList>
                    <StyledList>Bulk quantity of the same product ordered</StyledList>
                    <StyledList>Invalid address given in order details</StyledList>
                    <StyledList>Any malpractice used to place the order</StyledList>
                    <StyledList>Any promotional voucher used for placing the 'Bulk Order' may not be refunded</StyledList>
                    <StyledList>Any order paced using a technological glitch/loophole.</StyledList>
                </ul>
            <Typography variant="body2" ></Typography><br />
            <Typography variant="body2" ></Typography><br />
            <Typography variant="body2" ></Typography><br />
        </Grid>
        </>
    );
}
export default TermsPage;