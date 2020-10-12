import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyTaskCard from '../Cards/DailyTasksCard';
import {BiCheckSquare} from 'react-icons/bi';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


const JumboTron = Jumbotron;


class RentalAgreement extends React.Component {
    render() {
        return(
        <>
        <div style={{width: 320}, {padding:10}, {border:5}, {color:"solid gray"}}>
         <h3>Rental Agreement - Terms and Conditions</h3> 
            <p>
            RENTAL AGREEMENT FOR MAPLE COTTAGE INC.
            <br/>
            <br/>

            CONTACT INFORMATION <br/>
            Head Office address:<br/>
            11528 9th Ave NW,<br/>
            Edmonton, AB – T6J 6T9 <br/>
            Phone 780-249-9065 <br/><br/>
 
            OWNER <br/>
            Karen J. Cazemier <br/>
            Phone 780-996-9463 <br/>
            Email: karen@carecottages.ca <br/>
            Website Address: www.carecottages.ca <br/> <br/>

            WHAT IS INCLUDED IN YOUR ACCOMMODATION RENTAL AGREEMENT <br/> <br/>

            Your accommodation includes: <br/><br/>
            
            • 3 Delicious healthy and homemade meals<br/>
            • Unlimited Snacks and cold or hot beverages<br/>
            • Home baked goods<br/>
            • Laundry Services<br/>
            • Basic Cable<br/>
            • Basic Home Phone Services<br/>
            • Basic WIFI<br/>
            • All Utilities/ Heating/Gas<br/>
            • Some rooms may have basic room furnishings (basic bed, table, lamp, furnishings)<br/>
            • Basic Bed Linens and Towels<br/>
            • Communal TV <br/>
            • Communal Living Room and Dining Room Furniture <br/><br/>

            SECURITY DEPOSIT<br/>
            A security deposit of $2000 is required on or before the date of move in to hold a specific room for a resident. <br/>

            • Security deposits will hold a room for 7 days only.  After 7 days the security deposit is forfeited and not refundable.  <br/> 

            • Security deposits will be refunded within 45 days of the termination of residency less $150 for room maintenance. <br/>

            • Monthly room rentals are charged via electronic funds transfer before the end of each month. <br/>

            • One calendar month written notice is required if a resident wishes to vacate the premises for any reason. <br/>

            • If a resident passes away during a month the family is obligated to pay for the current month rent only in which the resident passed.  <br/>

            • If additional expenses are incurred while the resident is living at the home and     haven’t been paid for by the family in advance, these amounts may be deducted from the security deposit at the end of tenure. (Eg. pharmacy, hair care, bed rental). <br/><br/>
 
            ACCOMMODATION FEES AND PERSONAL TAX CREDIT<br/>
            Accommodations and personal living expenses are not tax deductible.  Should you wish to receive a government subsidy for living arrangements this will need to be applied for through the necessary appropriate government channels. The staff at Maple Cottage are not responsible for assisting residents with accessing these subsidies.<br/><br/>

            COMPLIANCE WITH ALBERTA HEALTH SERVICES – ACCOMMODATIONS STANDARDS LICENSING REGULATIONS<br/>
            Maple Cottage is fully licensed and compliant with the accommodations standards for seniors institutions and comply with government regulations that larger facilities are held responsible for. We are proud that we meet the government regulations and surpass these expectation in many of our standards. We are inspected regularly by Environmental Health and Safety Inspectors, Fire Inspectors and the Alberta Seniors Standards Licensing Board. We cooperate with Home Care, SAGE, The Care Guide and many other organizations to help families find appropriate housing solutions for their loved ones.<br/><br/>

            POLICY ON RESIDENT’S PERSONAL AFFAIRS AND GIFT GIVING <br/>
            Maple Cottage  strictly prohibits ANY staff involvement in our resident’s personal affairs both financial and non-financial. Maple Cottage is not liable or responsible for any of its resident’s personal belongings up to and including but not limited to money, or other material possessions such as room furnishings, paintings or art,  jewelry, heirlooms, wallets or credit cards, cheque books or other personal goods.  It is recommended that personal possessions of significant emotional or financial value not be brought to the communal living environment.  Items such as dentures, hearing aids, glasses, oxygen machines or other apparatus’ for mobility or living should be labeled and inventoried however they are not part of the  Maple Cottage liability obligations. Should residents require lifts or other assisting equipment it is the families obligation to obtain these through the Lending Cupboard or Aids to Daily Living. <br/><br/>

            NOTIFICATION OF SERVICES TERMINATION <br/>
            Occasionally a resident’s behavior may become extreme or disruptive to the overall peace in the home and could infringe on the rights and safety of other residents. In such instances, the Maple Cottage -  reserves the right to terminate services for any resident that is no longer suitable for our home environments.<br/> <br/>

            Notification of such events can be given with two weeks’ notice depending on the severity – up to and including immediate termination. Family members will be notified that other care arrangements will need to be made and we will work diligently to help families find other suitable accommodations.  Maple Cottage will do everything in its power to keep its residents and work with families to find alternative solutions to a termination of services situation and will use this method as the last and worst-case scenario. <br/> <br/>            

            NOTIFICATION OF RENTAL INCREASES <br/>
            Notification of rental increases will be given 30 days prior to the date of increase. This will typically happen at the beginning of the new calendar month.  Maple Cottage reserves the right to increase the rental accommodation at a rate of 3% annually.
            <br/> <br/>

            NOTIFICATION OF PHARMACY AND PHYSICIAN POLICIES <br/>           
            Residents consent to use the recommended Pharmacy and Physician of the operator’s choice for ease of use and continuity of operations. <br/> <br/>

            CONSENT FOR SOCIAL MEDIA <br/>
            Residents consent for photos of residents doing activities and internal home events to be made available on social media such as Facebook or Instagram for family enjoyment purposes. <br/> <br/>

            NOTIFICATION OF GIFT GIVING POLICIES <br/>
            Staff are not allowed to receive individual gifts or monetary rewards from residents. Staff can be rewarded on a group only “all staff” basis. <br/><br/>

            NOTIFICATION OF RISKS <br/>
            Maple Cottage provides safe environments for its residents. Families should be aware that there are risks involved in a private care home setting. Risks include less hospital equipment that can be found in larger facilities and dependence on Emergency Response systems in case of fire, or power failure. Resident’s should be aware that a nurse is not on site 24 hours/day and according to Alberta Health Services this may be considered “living at risk” in the community. <br/><br/>

            SECURITY DEPOSIT AND NOTICE TO VACATE <br/>
            Maple Cottage requires one calendar month written notice if a resident wishes to vacate the premises for any reason. Failure to provide one calendar month notice will result in forfeiting the security deposit, rental and care costs for the month remaining and the following month. If a hospital stay ensues and the family would like to keep the accommodation reserved for their loved one, the regular monthly fee is still required. In the event of death, the security deposit will be refunded to the resident’s estate less any expenses the resident may have incurred over and above the monthly rate. If the resident passes between the 1st and the 5th of the month, the care costs will be refunded on a prorated basis. If a resident passes after the 5th of the month, no care costs will be refunded. The rental costs for the month will not be refunded. <br/><br/>

            WHAT TO BRING: FURNITURE AND PERSONAL ITEMS <br/>
            We invite each of our residents to bring any furniture or personal items they may wish to have in order to furnish their space according to their own tastes. If needed, Maple Cottage may have furniture that can be used by clients, feel free to ask about it. Rooms typically come minimally furnished.  Maple Cottage does not cover the loss of items or property in its insurance coverage. Personal Renter insurance should be purchased for this.<br/> <br/>

            ADDITIONAL COSTS <br/><br/>
            • Personal health and beauty products<br/>

            • Prescription medications  <br/>

            • Haircuts or perms <br/>

            • Footcare <br/>

            • Continence supplies <br/>

            • Specialty items (special detergents, scent free products etc.) <br/>

            • Hospital beds <br/>

            • Special equipment for example sit to stand lifts, wheelchairs, hoyer lifts (other than basic home equipment) <br/>

            • Companion care <br/>

            • Special outings or specialty activities <br/>

            • Physiotherapy <br/>

            • Massage <br/>

            <br/>
            We have basic equipment which may be all that your loved one needs. However, be prepared to procure specialized equipment for your loved one from resources in the community such as Aides to Daily Living and the Lending Cupboard. Costs associated to outings and events are not covered by Maple Cottage. <br/><br/>
 
            VISITING HOURS<br/>         
            We invite each of our residents to have family or friends visit. We do not currently restrict our families to certain visiting hours. However, we do ask that an appropriate amount of respect for other residents be given in regard to noise levels and number of guests at a given time. <br/><br/>

            SCHEDULING APPOINTMENTS AND EXTERNAL SERVICE PROVIDERS<br/>
            We invite our families to make use of additional services such as physiotherapists, massage therapists and/or hair and nail technicians. For the safety and security of our residents, all visits from private providers must be scheduled and cleared with the Team Lead prior to the appointment taking place. Private providers must have ID and be shown to the Team Lead upon presentation to the home. <br/><br/>

            LEGAL DOCUMENTATION FOR SERVICE PROVIDERS <br/>     
            It is required by the government of Alberta that all service providers provide licenses and documentation of their professional qualifications prior to being allowed into the Cottage. If you do wish for a service provider to provide services, please also provide the license documentation to the Team Lead in advance of the scheduled appointment. <br/><br/>

            ADMISSION ACCEPTANCE:  APPLICATION PACKAGE AND PRE-ASSESSMENT<br/>
            All rental agreements are subject to an approved pre-assessment to be completed by our Registered Nurse or Doctor in order to assess and consider whether your loved one’s care can be safely accommodated in our Cottage. This screening process ensures the safety of your loved one by ensuring that we can adequately meet their needs in our care homes. We will schedule this with you after the application form has been completed.<br/><br/>

            PREVENTATIVE MAINTENANCE AND CONTINUATION OF SERVICES PLANNING <br/>
            To keep your loved ones safe, we have contingency plans for power failures, natural disasters and floods, fires and all other sorts of events that may require your loved one to be evacuated from the premises for their continued safety. Please feel free to ask for these details. <br/><br/>

        RENTAL GUIDELINES FOR RESIDENT<br/><br/>

            • Smoking is not permitted inside of the building. Designated smoking areas are located outside of the home for smoking pleasure. <br/><br/>
 
            • A “no noise” policy is in effect at all times but especially between the hours of 10:00 pm and 8:00 am. Loud noise disturbs the home and the other residents and may result in termination of services. <br/><br/>

            • Residents are asked to make extended absences of more than 24 hours known to the management team.  Please sign in and sign out at the front door. <br/><br/>

            • Friends or family are not permitted to sleep over in a resident’s room without special exceptions made by the management team. <br/><br/>

            • Maple Cottage recommends that each resident purchase Rental Insurance for the contents of their rooms as it is not responsible for the property of the residents. <br/><br/>

        • A minimum of one calendar month notice must be given for move-out and all personal items must be removed within 48 hours of the resident vacating the room. <br/><br/>

            • All rooms are subject to a $150 maintenance fee upon vacating the premises. <br/><br/>

            • In the event of no notice or late notification, the security deposit will not be refunded. <br/><br/>

            • Every new resident is on a three-month probation period. Within that period if management feels that the resident is not compatible with others living in a local home in the shared accommodations, management reserves the right to terminate services. Notice can be immediate but the accepted and typical practice is typically 14 days’ notice will be given for termination of services. <br/><br/>

            • If a resident is considered a danger to himself or others in the home or is seriously endangering the quality of life for others at the home an immediate termination may be needed and Alberta Health Services or the local Hospital and Emergency Services will be responsible for further placement. <br/><br/>

            • Management cannot stress enough that this is a shared living environment. Participation and active cooperation with the guidelines is a condition of residency.
            <br/><br/>
 
            SERVICES AGREEMENT AND WAIVER OF LIABILITY, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT
            <br/>
            In consideration of being permitted to become a resident at Maple Cottage and in any way participate in an outing, a car ride, transportation, party, entertainment, and the like (hereafter referred to as an “Activity”), I for myself, my heirs, personal representatives or assigns, do hereby release, waive, discharge and covenant not to sue (Community Care Cottages Inc. and/or Maple Cottage Inc.) its officers, employees, agents and volunteers from liability from any and all claims including the negligence of (Community Care Cottages Inc. and/or Maple Cottage Inc.) its officers, employees, agents, and volunteers resulting in personal injury, accidents or illnesses (including death), and property loss arising from, but not limited to, participation in an “Activity” or residency. <br/><br/>

            ASSUMPTION OF RISKS: <br/>
            Participation in an “Activity” and “Residency” carries with it certain inherent risks that cannot be eliminated regardless of the care taken to avoid injuries. The specific risks vary from one activity to another, but the risks range from 1. Minor injuries such as scratches, bruises and sprains. 2. Major injuries such as eye injury or loss of sight, joint or back injuries, heart attacks, and concussions to 3. Catastrophic injuries including paralysis or death. <br/><br/>

            MEDIA CONFIDENTIALITY INDEMNIFICATION AND HOLD HARMLESS: <br/>
            I also agree to indemnify and hold (Community Care Cottages Inc. and/or Maple Cottage Inc.) from any negative media attention and all claims, actions, suits, procedures, costs, expenses, damages, and liabilities, including attorney’s fees for defamation of character brought as a result of my involvement in an “Activity” or “Residency” and agree to reimburse them for any such expenses incurred. Acknowledging that termination of the agreement could result. <br/><br/>

            INDEMNIFICATION AND HOLD HARMLESS: <br/>
            I also agree to indemnify and hold (Community Care Cottages Inc.and/or Maple Cottage Inc. ) from any and all claims, actions, suits, procedures, costs, expenses, damages, and liabilities, including attorney’s fees brought as a result of my involvement in an “Activity” or “Residency” and to reimburse them for any such expenses incurred.
            <br/><br/>

            SEVERABILITY: <br/>
            The undersigned further expressly agrees that the foregoing waiver and assumption of risks agreement is intended to be as broad and inclusive as is permitted by the law of the Province of Alberta and that if any portion thereof is held invalid, it is agreed that the balance shall, notwithstanding, continue in full legal force and effect.
            <br/><br/>

            ACKNOWLEDGMENT OF UNDERSTANDING: <br/>
            I have read the waiver of liability, assumption of risk, and indemnity agreement, fully understood its terms and understand that I am giving up substantial rights, including my right to sue and right to gain media attention. I acknowledge that I am signing the agreement freely and voluntarily, and intend my signature to be a complete and unconditional release of all liability to the greatest extent allowed by law.
            <br/><br/>

        RENTAL SERVICE AGREEMENT:<br/>
            Based upon the information received from the applicant, the following agreement has been made. <br/><br/>

            1. The Resident Service plan has been discussed verbally and forms part of this agreement. <br/><br/>

            2. The Resident agrees to pay additional fees for personal choices contracted out to other services such as hair care, foot care, massages, OT or specialized equipment.
            <br/><br/>

            3. Monthly rental fees are due on the first of each month. To assure all automatic withdrawals. Debit withdrawals are processed on the 25th to the 28th of the month. Holidays and weekends can affect these dates. <br/><br/>

            4. Should the resident be temporarily absent from the home he/she will be charged the regular monthly fee addressed in the agreement. <br/><br/>

            5. Resident agrees to a minimum of one calendar month written notice before move-out and the personal items in the room must be removed within 48 hours upon vacating. In the event of no or late notification, the security deposit will not be refunded. 
            <br/><br/>

            6. Any unused portion of the security deposit after maintenance cost ( $150) and other expenses incurred during tenure will be refunded within 45 days from the date of move. In the event of a death, the security deposit will be refunded within the 45 days to the resident’s estate less any expenses the resident may have incurred over and above the monthly rate. <br/><br/>

            7. Maple Cottages does not provide insurance for the resident’s possessions and encourages individuals to acquire their own property insurance. <br/><br/>

            8. Guidelines for the home are part of this agreement and contained in the application and must be read and signed by the resident or POA. <br/><br/>

            9. The resident and family agree to adhere to all policies and information provided in the Resident Handbook. <br/><br/>
            </p>
    }
          </div> 
    </>
        );
}
};

export default RentalAgreement;
