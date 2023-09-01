//Dependencies
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//Style
import './help.scss'

const Help =()=> {
    return(
        
        <div className='help-conteiner'>
            <h2>frequently asked questions</h2>
            <div className='help-accordion'>
                <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>¿HOW TO PAY?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        You just have to follow the following steps:
                        <ul>
                            <li>Enter inside the article, select your size and color. In the upper right part of the web you will see a summary of the shopping cart where you can access and see the items you have added.</li>
                            <li>You must register, you must fill in the form with your data to have access to the next step. Or if you are already a user, access with your username and password and go to the next step.</li>
                            <li>The budget is shown where you must check the items to buy and choose the payment method (you have a section where the payment methods are specified) either by TRANSFER where an e-mail is sent with the steps to follow, by CREDIT CARD that It is a secure purchase where you will be asked for a personal code to verify the card, Pay Pal that will request the necessary information to make the payment. You can postpone your purchases with the new Pay + Tarde payment method (you can consult the conditions in the payment methods).</li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                        <Typography>¿WHAT FORMS OF PAYMENT CAN I USE?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h4>PAYPAL</h4> 
                            Leader in online payments with more than 193 million accounts worldwide, it is the fastest and safest way to make payments and receive payments online. PayPal makes online shopping fast, fun and easy, and is accepted by thousands of merchants around the world. With PayPal, you don't have to worry about disclosure of your financial information: PayPal never shares that information with sellers.
                            You don't need to enter your credit card number and address every time you make a purchase: just log in to your PayPal account, confirm payment, and your transaction is complete.
                            It's safer: Fraud detection and verification techniques are among the best in the industry.
                            Flexible payment: PayPal balance, bank account, credit card or debit card.
                            <h4>CREDIT CARD</h4> 
                            We guarantee that each of the transactions made on tablasurfshop.com is 100% secure. All operations involving the transmission of personal or banking data are carried out using a secure environment. Our tablasurfshop.com store uses a server based on the standard security technology SSL (Secure Socked Layer). All the information that you transmit to us travels encrypted through the network.Likewise, the data on your credit card are not registered in any database but go directly to the POS (Bank Point of Sale Terminal).We also inform you that in an effort to provide credit card owners with greater security, we have incorporated the secure payment system called CES (Secure Electronic Commerce) into our payment gateway. In this way, if you are the holder of a “secured” card, you can always make payments with a VISA or MASTERCARD card in our store.In the event that your card is not attached to this payment system, tablasurfshop.com will only accept payment by VISA or MASTERCARD credit card to customers with proven seniority and reliability.In both cases, when paying with a VISA or MASTERCARD card, the following information will always be requested: the card number, the expiration date, and a Validation Code that coincides with the last 3 digits of the number printed in italics on the back of the card. your VISA or MASTERCARD card, thus offering more guarantees about the security of the transaction.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>¿HOW LONG DOES IT TAKE FOR MY ORDER TO ARRIVE? HOW MUCH DOES IT COST?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            CHECK THE DELIVERY TIME OF YOUR ARTICLE. You can see it on the product sheet, by clicking on the size. Delivery time may vary from 1-2 days to 15 business days depending on the size.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography>¿CAN I RETURN AN ORDER?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            To return a product, you have 14 calendar days from its delivery to access the money back (art.44 of Law 7/1996, January 15, Retail Trade Regulations modified by Law 47/2002, Decembre 19th).Resulting from a return, in which the customer does not keep the product, the shipping and return costs will be borne by the customer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>  
        </div>
    )
}

export default Help