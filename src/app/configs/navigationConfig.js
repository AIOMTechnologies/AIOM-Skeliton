import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  
  {
    id: 'dashbord-component',
    title: 'DASHBOARD',
    translate: 'DASHBOARD',
    type: 'item',
    icon: 'heroicons-outline:chart-bar',
    url: 'dashboard',
  },
  {
    id: 'hospital-component',
    title: 'HOSPITAL',
    translate: 'HOSPITAL',
    type: 'group',
    icon: 'heroicons-outline:office-building',
    children: [
      
      {
        id: 'hospital.patientSearch',
        title: 'PATIENT SEARCH',
        type: 'item',
        icon: 'heroicons-outline:search',
        url: '/hospital/patientSearch',
      },
      {
        id: 'hospital.appointment',
        title: 'APPOINTMENT',
        type: 'item',
        icon: 'heroicons-outline:clipboard-check',
        url: '/hospital/apointment',
        
      },
      {
        id: 'hospital.outPatient',
        title: 'OUT PATIENT',
        type: 'collapse',
        icon: 'heroicons-outline:user',
        children: [
          {
            id: 'hospital.outPatient.opRegistration',
            title: 'OP REGISTRATION',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/opRegistration',
          },
          {
            id: 'hospital.outPatient.opdConsultation',
            title: 'OPD CONSULTATION',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/opdConsultation',
          },
          {
            id: 'hospital.outPatient.opBilling',
            title: 'OP BILLING',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/opBilling',
          },
        ],
      },
      {
        id: 'hospital.inPatient',
        title: 'IN PATIENT',
        type: 'collapse',
        icon: 'heroicons-outline:user',
        children: [
          {
            id: 'hospital.outPatient.ipAdmit',
            title: 'IP ADMIT',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/ipAdmit',
          },
          {
            id: 'hospital.outPatient.ipAdvance',
            title: 'IP ADVANCE',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/ipAdvance',
          },
          {
            id: 'hospital.outPatient.ipServices',
            title: 'IP SERVICES',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/ipServices',
          },
          {
            id: 'hospital.outPatient.doctorTransfer',
            title: 'DOCTOR TRANSFER',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/doctorTransfer',
          },
          {
            id: 'hospital.outPatient.roomTransfer',
            title: 'ROOM & BED TRANSFER',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/roomTransfer',
          },
          {
            id: 'hospital.outPatient.approxmateBill',
            title: 'APPROXMATE BILL',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/approxmateBill',
          },
          {
            id: 'hospital.outPatient.ipFinallBill',
            title: 'IP FINALL BILL',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/ipFinallBill',
          },
          {
            id: 'hospital.outPatient.ipRefund',
            title: 'IP REFUND',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/ipRefund',
          },
          {
            id: 'hospital.outPatient.duePayment',
            title: 'DUE PAYMENTS',
            type: 'item',
            icon: 'heroicons-outline:clipboard-check',
            url: '/hospital/duePayment',
          },
        ],
      },
    ],
   
  },
  {
    id: 'laboratory-component',
    title: 'LABORATORY',
    translate: 'LABORATORY',
    type: 'item',
    icon: 'heroicons-outline:beaker',
    children: [
      
      {
        id: 'hospital.sampleCollection',
        title: 'SAMPLE COLLECTION',
        type: 'item',
        icon: 'heroicons-outline:search',
        url: '/hospital/sampleCollection',
      },
      {
        id: 'hospital.resultEntry',
        title: 'RESULT ENTRY',
        type: 'item',
        icon: 'heroicons-outline:search',
        url: '/hospital/resultEntry',
      },
    ],
  },
  {
    id: 'pharmacy-component',
    title: 'PHARMACY',
    translate: 'PHARMACY',
    type: 'item',
    icon: 'heroicons-outline:plus-circle',
    url: 'pharmacy',
  },
  {
    id: 'nurse-component',
    title: 'NURSE',
    translate: 'NURSE',
    type: 'item',
    icon: 'heroicons-outline:clipboard-list',
    url: 'nurse',
  },
  {
    id: 'master-component',
    title: 'MASTER',
    translate: 'MASTER',
    type: 'group',
    icon: 'heroicons-outline:database',
    children: [
      {
        id: 'master.administrator',
        title: 'ADMINISTRATOR',
        type: 'collapse',
        icon: 'heroicons-outline:clipboard-check',
        children: [
          {
            id: 'master.administrator.location',
            title: 'LOCATION',
            type: 'collapse',
            icon: 'heroicons-outline:globe',
            children: [
              {
                id: 'administrator.location.state',
                title: 'STATE',
                type: 'item',
                icon: 'heroicons-outline:location-marker',
                url: 'master/administrator/location/stateMaster',
              },
              {
                id: 'administrator.location.district',
                title: 'DISTRICT',
                type: 'item',
                icon: 'heroicons-outline:location-marker',
                url: 'master/administrator/designationMaster',
              },
              {
                id: 'administrator.location.city',
                title: 'CITY',
                type: 'item',
                icon: 'heroicons-outline:location-marker',
                url: 'master/administrator/departmentMaster',
              },
            ],
          },
          {
            id: 'administrator.designationMaster',
            title: 'DESIGNATION MASTER',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/designationMaster',
          },
          {
            id: 'administrator.departmentMaster',
            title: 'DEPARTMENT MASTER',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/departmentMaster',
          },
          {
            id: 'administrator.nurseMaster',
            title: 'NURSE MASTER',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'administrator.branches',
            title: 'BRANCHES',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'administrator.insuranceMaster',
            title: 'INSURANCE MASTER',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'administrator.authorization',
            title: 'AUTHORIZATION',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'administrator.referrals',
            title: 'REFERRALS',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'administrator.systemParameters',
            title: 'SYSTEM PARAMETERS',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'master.administrator.dischargeFormatMasters',
            title: 'DISCHARGE FORMATE MASTERS',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'administrator.serviceGroup (Laboratory)',
            title: 'SERVICE GROUP (LABORATORY)',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/location',
          },
          {
            id: 'administrator.usersProfiles',
            title: 'USERS PROFILES',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/usersProfiles',
          },
          {
            id: 'administrator-employee',
            title: 'EMPLOYEES',
            type: 'item',
            icon: 'heroicons-outline:user',
            url: 'master/administrator/employees',
            end: true,
          },
          
          {
            id: 'administrator-employee-detail',
            title: 'Employees Detail',
            type: 'item',
            url: 'master/administrator/employees/1/a-walk-amongst-friends-canvas-print',
          },
         
          
        ],
      },
      
    ],
  },
  
];

export default navigationConfig;
