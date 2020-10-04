import React from 'react';
import axios from 'axios';

export default class EmployeeOrientation extends React.Component {
  state = {
    orientHowToCreateOwnAccount:'',
    orientNonDiscNonSolicitNonCompet:'',
    orientOathConf:'',
    orientContractEmployment:'',
    orientCertificates:'',
    orientCrimRecordCheck:'',
    orientFinancialInfo:'',
    orientIntroToStaffStructure:'',
    orientJobDescrRolesResp:'',
    orientDiversityEquality:'',
    orientDressCode:'',
    orientAccessToCommCarePolsProcs:'',
    orientAccessRoutes:'',
    orientWashroomHandWashFac:'',
    orientFireExitsAndProc:'',
    orientTelephoneAccessPts:'',
    orientFireEvacProc:'',
    orientFireExtSprink:'',
    orientContingPlan:'',
    orientWaterSafeyProc:'',
    orientCompletingHousekeepSafey:'',
    orientIntranet:'',
    orientStaffSchedules:'',
    orientStoringPersonalItems:'',
    orientTimesheetsPay:'',
    orientPolRecGifts:'',
    orientDiscAndGrievance:'',
    orientProcForReportAbsenceIllness:'',
    orientIndivInfoSheet:'',
    orientSuperApprais:'',
    orientMentoringArrang:'',
    orientTrainAndDev:'',
    orientProcForReportAndRecordAccIncid:'',
    orientFamiliarizeAccIncidDoc:'',
    orientNotifOfRelevantPeople:'',
    orientFirstAidProv:'',
    orientCarePlansMedCharts:'',
    orientAdminOfMed:'',
    orientAccessToRecsConfidDataProt:'',
    orientAdultProtPolsProcs:'',
    orientMovingAndHandling:'',
    orientOperOfAidsAndHoists:'',
    orientSafeFoodHandling:'',
    orientInfecControlPPE:'',
    orientHandwashingTech:'',
    orientStaffFirstName:'',
    orientStaffLastName:'',
    orientSuperFirstName:'',
    orientSuperLastName:'',
    orientDate:'',
    orientIEmployeeSignOff:''
    }

  handleChange = event => {
    this.setState({ 
    orientHowToCreateOwnAccount: event.target.value,
    orientNonDiscNonSolicitNonCompet: event.target.value,
    orientOathConf: event.target.value,
    orientContractEmployment: event.target.value,
    orientCertificates: event.target.value,
    orientCrimRecordCheck: event.target.value,
    orientFinancialInfo: event.target.value,
    orientIntroToStaffStructure: event.target.value,
    orientJobDescrRolesResp: event.target.value,
    orientDiversityEquality: event.target.value,
    orientDressCode: event.target.value,
    orientAccessToCommCarePolsProcs: event.target.value,
    orientAccessRoutes: event.target.value,
    orientWashroomHandWashFac: event.target.value,
    orientFireExitsAndProc: event.target.value,
    orientTelephoneAccessPts: event.target.value,
    orientFireEvacProc: event.target.value,
    orientFireExtSprink: event.target.value,
    orientContingPlan: event.target.value,
    orientWaterSafeyProc: event.target.value,
    orientCompletingHousekeepSafey: event.target.value,
    orientIntranet: event.target.value,
    orientStaffSchedules: event.target.value,
    orientStoringPersonalItems: event.target.value,
    orientTimesheetsPay: event.target.value,
    orientPolRecGifts: event.target.value,
    orientDiscAndGrievance: event.target.value,
    orientProcForReportAbsenceIllness: event.target.value,
    orientIndivInfoSheet: event.target.value,
    orientSuperApprais: event.target.value,
    orientMentoringArrang: event.target.value,
    orientTrainAndDev: event.target.value,
    orientProcForReportAndRecordAccIncid: event.target.value,
    orientFamiliarizeAccIncidDoc: event.target.value,
    orientNotifOfRelevantPeople: event.target.value,
    orientFirstAidProv: event.target.value,
    orientCarePlansMedCharts: event.target.value,
    orientAdminOfMed: event.target.value,
    orientAccessToRecsConfidDataProt: event.target.value,
    orientAdultProtPolsProcs: event.target.value,
    orientMovingAndHandling: event.target.value,
    orientOperOfAidsAndHoists: event.target.value,
    orientSafeFoodHandling: event.target.value,
    orientInfecControlPPE: event.target.value,
    orientHandwashingTech: event.target.value,
    orientStaffFirstName: event.target.value,
    orientStaffLastName: event.target.value,
    orientSuperFirstName: event.target.value,
    orientSuperLastName: event.target.value,
    orientDate: event.target.value,
    orientIEmployeeSignOff: event.target.value
    });
}

  handleSubmit = event => {
    event.preventDefault();
    const employeeOrientation = {
    orientHowToCreateOwnAccount: this.state.orientHowToCreateOwnAccount,
    orientNonDiscNonSolicitNonCompet: this.state.orientNonDiscNonSolicitNonCompet,
    orientOathConf: this.state.orientOathConf,
    orientContractEmployment: this.state.orientContractEmployment,
    orientCertificates: this.state.orientCertificates,
    orientCrimRecordCheck: this.state.orientCrimRecordCheck,
    orientFinancialInfo: this.state.orientFinancialInfo,
    orientIntroToStaffStructure: this.state.orientIntroToStaffStructure,
    orientJobDescrRolesResp: this.state.orientJobDescrRolesResp,
    orientDiversityEquality: this.state.orientDiversityEquality,
    orientDressCode: this.state.orientDressCode,
    orientAccessToCommCarePolsProcs: this.state.orientAccessToCommCarePolsProcs,
    orientAccessRoutes: this.state.orientAccessRoutes,
    orientWashroomHandWashFac: this.state.orientWashroomHandWashFac,
    orientFireExitsAndProc: this.state.orientFireExitsAndProc,
    orientTelephoneAccessPts: this.state.orientTelephoneAccessPts,
    orientFireEvacProc: this.state.orientFireEvacProc,
    orientFireExtSprink: this.state.orientFireExtSprink,
    orientContingPlan: this.state.orientContingPlan,
    orientWaterSafeyProc: this.state.orientWaterSafeyProc,
    orientCompletingHousekeepSafey: this.state.orientCompletingHousekeepSafey,
    orientIntranet: this.state.orientIntranet,
    orientStaffSchedules: this.state.orientStaffSchedules,
    orientStoringPersonalItems: this.state.orientStoringPersonalItems,
    orientTimesheetsPay: this.state.orientTimesheetsPay,
    orientPolRecGifts: this.state.orientPolRecGifts,
    orientDiscAndGrievance: this.state.orientDiscAndGrievance,
    orientProcForReportAbsenceIllness: this.state.orientProcForReportAbsenceIllness,
    orientIndivInfoSheet: this.state.orientIndivInfoSheet,
    orientSuperApprais: this.state.orientSuperApprais,
    orientMentoringArrang: this.state.orientMentoringArrang,
    orientTrainAndDev: this.state.orientTrainAndDev,
    orientProcForReportAndRecordAccIncid: this.state.orientProcForReportAndRecordAccIncid,
    orientFamiliarizeAccIncidDoc: this.state.orientFamiliarizeAccIncidDoc,
    orientNotifOfRelevantPeople: this.state.orientNotifOfRelevantPeople,
    orientFirstAidProv: this.state.orientFirstAidProv,
    orientCarePlansMedCharts: this.state.orientCarePlansMedCharts,
    orientAdminOfMed: this.state.orientAdminOfMed,
    orientAccessToRecsConfidDataProt: this.state.orientAccessToRecsConfidDataProt,
    orientAdultProtPolsProcs: this.state.orientAdultProtPolsProcs,
    orientMovingAndHandling: this.state.orientMovingAndHandling,
    orientOperOfAidsAndHoists: this.state.orientOperOfAidsAndHoists,
    orientSafeFoodHandling: this.state.orientSafeFoodHandling,
    orientInfecControlPPE: this.state.orientInfecControlPPE,
    orientHandwashingTech: this.state.orientHandwashingTech,
    orientStaffFirstName: this.state.orientStaffFirstName,
    orientStaffLastName: this.state.orientStaffLastName,
    orientSuperFirstName: this.state.orientSuperFirstName,
    orientSuperLastName: this.state.orientSuperLastName,
    orientDate: this.state.orientDate,
    orientIEmployeeSignOff: this.state.orientIEmployeeSignOff
    };

    axios.post(`http://localhost:4001/api/employeeorientation`, { employeeOrientation })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}