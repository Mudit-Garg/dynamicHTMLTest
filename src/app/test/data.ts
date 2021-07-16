export enum eFormControlType {
  Input = 1,
  Number = 2,
  Colorpicker = 3,
  Iconpicker = 4,
  Datepicker = 5,
  Dropdown = 6,
  CheckBox = 7,
  RadioGroup = 8,
  FileUpload = 9,
  TextArea = 10,
  ContactInfo = 11,
  SocialProvider = 12,
  NestedType = 13,
  Address = 14,
  SelectButton = 15,
  TreeDropdown = 16
}

export class myData {

public static data = {​
  addPage: (layoutData, pageId, item) => {​
    item.pageId = pageId;
    layoutData.pages.push({​
      id: pageId,
      templates: [
        'header',
        'itemList',
        'totals',
        'enquiries',
        'additionalComments',
        'notes',
        'footerNotes',
        'footer'
      ],
      items: [item],
      MaxItemsLength: 16
    }​);
  }​,
  pages: [
    {​
      id: 0,
      templates: [
        'header',
        'owner_vendor_details',
        'itemList',
        'hr',
        'totals',
        'enquiries',
        'additionalComments',
        'notes',
        'footerNotes',
        'footer'
      ],
      items: [
        {​
          idx: 0,
          pageId: 0,
          description: '-',
          customFields: [],
          glCode: '',
          quantity: 0,
          rate: 0,
          tax: 0,
          assigneeTo: null,
          lineTotal: rowData => {​
            return rowData['quantity'] * rowData['rate'];
          }​
        }​
      ],
      MaxItemsLength: 11
    }​
  ],
  logoSrc: {​
    value: 'assets/img/IMG.png'
  }​,
  company: {​
    id: {​
      value: 1
    }​,
    name: {​
      label: 'Company Name',
      labelDescription: 'Set the Company name',
      required: true,
      type: eFormControlType.Input,
      value: "Google",
      formControlName: 'companyName'
    }​
  }​,
  purchaseOrderNumber: {​
    label: 'Purchase Order #',
    labelDescription: 'Set purchase order id',
    required: true,
    type: eFormControlType.Input,
    value: '337 - 33700546692',
    formControlName: 'purchaseOrderNumber',
    onChange: {​
      callbackFunction: (layoutData, event) => {​
        layoutData.purchaseOrderNumber.value = event.value;
      }​
    }​
  }​,
  actionDate: {​
    label: 'Issuance Date',
    labelDescription: 'When is this p.o issued?',
    required: true,
    type: eFormControlType.Datepicker,
    value: new Date(),
    formControlName: 'actionDate',
    class: 'col-6 p-0'
  }​,
  deliveryDate: {​
    label: 'Delivery Date',
    labelDescription: 'Estimated delivery date?',
    required: true,
    type: eFormControlType.Datepicker,
    value: new Date(),
    formControlName: 'deliveryDate',
    class: 'col-6 p-0'
  }​,
  currency: {​
    id: {​
      label: 'Currency',
      labelDescription: 'Please select the PO currency.',
      required: true,
      type: eFormControlType.Dropdown,
      value: 2,
      formControlName: 'currencyId',
      class: 'col-12 p-0',
      preLoadedOptions: [],
      filter: true,
      onChange: {​
        callbackFunction: (layoutData, event) => {​
          // if (layoutData && event) {​
          //   const currency = eCurrencyName.get(event.value);
          //   if (currency) {​
          //     layoutData.currency.name.value =
          //       currency.name + ' (' + currency.code + ')';
          //     layoutData.currency.code.value = currency.code;
          //     layoutData.currency.symbol.value = currency.symbol;
          //     layoutData.items.totalsFunctions.find(
          //       t => t.id == 'total'
          //     ).label = 'Total (' + currency.code + ')';
          //   }​
          // }​
        }​
      }​
    }​,
    name: {​ value: 'US Dollar (USD)' }​,
    code: {​ value: 'USD' }​,
    symbol: {​ value: '$' }​
  }​,
  additionalComments: {​
    label: 'Additional Comments',
    labelDescription: 'Please enter the PO additional comments.',
    required: false,
    type: eFormControlType.TextArea,
    value: 'PO REQUESTED BY B LEONARD NOT PBN - NUTANIX (AVID UPGRADE)',
    formControlName: 'additionalComments',
    class: 'col-12 p-0'
  }​,
  notes: {​
    label: 'Notes',
    labelDescription: 'Please enter the PO Notes.',
    required: false,
    type: eFormControlType.TextArea,
    value:
      'PLEASE REFER TO THE PURCHASE ORDER TERMS AND CONDITIONS OVERLEAF; AND THE STANDARD TERMS AND CONDITIONS ATTACHED.',
    formControlName: 'notes',
    class: 'col-12 p-0'
  }​,
  footerNotes: {​
    label: 'Footer Notes',
    labelDescription: 'Please enter the PO Footer Notes.',
    required: false,
    type: eFormControlType.TextArea,
    value:
      'IMG Media Ltd, IMG Studios, 5 Longwalk Road, Stockley Park, UB11 1FE T: +44(0)20 3314 5000 IMG Media Limited is incorporated in England with Registered Number: 4459066 Registered Office: Building 6, Chiswick Park, 556 Chiswick Park, 556 Chiswick High Road, London, W4 5HR, England.',
    formControlName: 'footerNotes',
    class: 'col-12 p-0'
  }​,
  vendor: {​
    id: {​
      label: 'Vendor',
      labelDescription: {​
        basicInfo: 'Select the vendor for this purchase order.',
        billingShippingInfo: 'Add vendor information below.'
      }​,
      required: true,
      type: eFormControlType.Dropdown,
      value: null,
      formControlName: 'vendorId',
      class: {​
        basicInfo: 'col-12 p-0',
        billingShippingInfo: 'col-6 p-0'
      }​,
      controlClass: {​
        basicInfo: 'col-12 p-1',
        billingShippingInfo: 'col-12 pl-1 pr-0 pt-1'
      }​,
      preLoadedOptions: [],
      displayImage: true,
      receiveDataOnShow: false,
      filter: true,
      onChange: {​
        executeFunction: 'getVendorDetails',
        callbackFunction: (layoutData, event) => {​
          if (layoutData && event) {​
            layoutData.vendor.vendorRef.value =
              event.ReferenceNumberExt || '-';
            layoutData.vendor.legalName.value = event.legalName;
            layoutData.vendor.name.value = event.name;
            layoutData.vendor.address.addressLine.value =
              event.address.addressLine1;
            layoutData.vendor.address.street.value =
              event.address.addressLine1;
            layoutData.vendor.address.city.value = event.address.city;
            layoutData.vendor.address.state.value = event.address.state;
            layoutData.vendor.address.postalCode.value =
              event.address.postalCode;
            layoutData.vendor.address.country.id.value =
              event.address.countryId;
            layoutData.vendor.address.country.name.value =
              event.address.countryName;
          }​
        }​
      }​
    }​,
    vendorRef: {​
      label: 'Vendor Ref #',
      labelDescription: 'Set Purchase Order Vendor Ref',
      required: true,
      type: eFormControlType.Input,
      value: '-',
      formControlName: 'vendorRef'
    }​,
    name: {​
      value: '[Vendor Name]'
    }​,
    legalName: {​
      label: 'Legal Name',
      labelDescription: 'Set the Legal Name',
      required: true,
      type: eFormControlType.Input,
      value: '[Vendor Legal Name]',
      formControlName: 'legalName'
    }​,
    department: {​
      label: '-',
      labelDescription: '-',
      labelClass: 'invisible',
      labelDescriptionClass: 'invisible',
      type: eFormControlType.Input,
      value: '[Dept]',
      formControlName: 'vendorDept',
      disabled: true,
      class: 'col-6 p-0',
      controlClass: 'col-12 pl-1 pr-0 pt-1'
    }​,
    role: {​ value: 'MattHuster' }​,
    address: {​
      // vendorDifferentAddress: {​
      //   label: 'Bill To Different Address',
      //   type: eFormControlType.CheckBox,
      //   value: true,
      //   formControlName: 'vendorDifferentAddress',
      //   class: 'col-12 p-0 mt-3',
      //   onChange: {​
      //     callbackFunction: (layoutData, data) => {​
      //       if (layoutData && data) {​
      //         layoutData.vendor.address.addressLine.disabled = !data;
      //         layoutData.vendor.address.street.disabled = !data;
      //         layoutData.vendor.address.city.disabled = !data;
      //         layoutData.vendor.address.state.disabled = !data;
      //         layoutData.vendor.address.country.id.disabled = !data;
      //       }​
      //     }​
      //   }​
      // }​,
      addressLine: {​
        type: eFormControlType.Input,
        value: '[Address Line]',
        formControlName: 'vendorAddressLine',
        class: 'col-12 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      street: {​
        type: eFormControlType.Input,
        value: '[Street]',
        formControlName: 'vendorAddressStreet',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      city: {​
        type: eFormControlType.Input,
        value: '[City]',
        formControlName: 'vendorAddressCity',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      state: {​
        type: eFormControlType.Input,
        value: '[Staate]',
        formControlName: 'vendorState',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      postalCode: {​
        type: eFormControlType.Input,
        value: '[Postal Code]',
        formControlName: 'vendorPostalCode',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      country: {​
        id: {​
          type: eFormControlType.Dropdown,
          value: '[Country]',
          formControlName: 'vendorAddressCountry',
          class: 'col-3 p-0',
          disabled: false,
          preLoadedOptions: [],
          filter: true,
          controlClass: 'col-12 pl-1 pr-0 pt-1',
          labelClass: 'd-none',
          onChange: {​
            executeFunction: 'setCountryName',
            callbackFunction: (layoutData, event) => {​
              layoutData.vendor.address.country.name.value =
                event.countryName;
            }​
          }​
        }​,
        name: {​
          value: '[Country]'
        }​
      }​
    }​,
    phone: {​ value: '+1225 225 2252' }​,
    fax: {​ value: '0332 409 202' }​
  }​,
  owner: {​
    id: {​
      label: 'Owner',
      labelDescription: {​
        basicInfo:
          'You are the default owner but the owner can also be someone other than you.',
        billingShippingInfo: 'Add owner information below.'
      }​,
      required: true,
      type: eFormControlType.Dropdown,
      value: null,
      formControlName: 'ownerName',
      class: {​
        basicInfo: 'col-12 p-0',
        billingShippingInfo: 'col-6 p-0'
      }​,
      controlClass: {​
        basicInfo: 'col-12 p-1',
        billingShippingInfo: 'col-12 pl-1 pr-0 pt-1'
      }​,
      preLoadedOptions: [],
      displayImage: true,
      filter: true,
      onChange: {​
        executeFunction: 'getOwnerDetails',
        callbackFunction: (layoutData, event) => {​
          if (layoutData && event) {​
            layoutData.company.name.value = event.companyName;
            layoutData.owner.name.value = event.name;
            layoutData.owner.email.value = event.email;
            layoutData.owner.phone.value = event.phone;
            layoutData.owner.department.value = event.departmentName;
            layoutData.owner.address.addressLine.value =
              event.address.addressLine1;
            layoutData.owner.address.street.value =
              event.address.addressLine1;
            layoutData.owner.address.city.value = event.address.city;
            layoutData.owner.address.state.value = event.address.state;
            layoutData.owner.address.postalCode.value =
              event.address.postalCode;
            layoutData.owner.address.country.id.value =
              event.address.countryId;
            layoutData.owner.address.country.name.value =
              event.address.countryName;
          }​
        }​
      }​
    }​,
    name: {​
      value: "Nameless"
    }​,
    department: {​
      label: '-',
      labelDescription: '-',
      labelClass: 'invisible',
      labelDescriptionClass: 'invisible',
      type: eFormControlType.Input,
      value: '[Dept]',
      formControlName: 'ownerDept',
      disabled: true,
      class: 'col-6 p-0',
      controlClass: 'col-12 pl-1 pr-0 pt-1'
    }​,
    role: {​ value: 'site Adminstrator' }​,
    address: {​
      ownedbyDiffrentAddress: {​
        label: 'Owned By Diffrent Address',
        type: eFormControlType.CheckBox,
        value: true,
        formControlName: 'ownedbyDiffrentAddress',
        class: 'col-12 p-0',
        onChange: {​
          callbackFunction: (layoutData, data) => {​
            if (layoutData && data) {​
              layoutData.owner.address.addressLine.disabled = !data;
              layoutData.owner.address.street.disabled = !data;
              layoutData.owner.address.city.disabled = !data;
              layoutData.owner.address.state.disabled = !data;
              layoutData.owner.address.country.id.disabled = !data;
            }​
          }​
        }​
      }​,
      addressLine: {​
        type: eFormControlType.Input,
        value: '[Address Line]',
        formControlName: 'ownerAddressLine',
        class: 'col-12 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      street: {​
        type: eFormControlType.Input,
        value: '[Street]',
        formControlName: 'ownerAddressStreet',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      state: {​
        type: eFormControlType.Input,
        value: '[State]',
        formControlName: 'ownerState',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      postalCode: {​
        type: eFormControlType.Input,
        value: '[Postal Code]',
        formControlName: 'ownerPostalCode',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      city: {​
        type: eFormControlType.Input,
        value: '[City]',
        formControlName: 'ownerAddressCity',
        class: 'col-3 p-0',
        disabled: false,
        controlClass: 'col-12 pl-1 pr-0 pt-1'
      }​,
      country: {​
        id: {​
          type: eFormControlType.Dropdown,
          value: '[Country]',
          formControlName: 'ownerAddressCountry',
          class: 'col-3 p-0',
          disabled: false,
          preLoadedOptions: [],
          filter: true,
          controlClass: 'col-12 pl-1 pr-0 pt-1',
          labelClass: 'd-none',
          onChange: {​
            executeFunction: 'setCountryName',
            callbackFunction: (layoutData, event) => {​
              layoutData.owner.address.country.name.value = event.countryName;
            }​
          }​
        }​,
        name: {​
          value: '[Country]'
        }​
      }​
    }​,
    phone: {​ value: '1.360.657.2322' }​,
    email: {​
      value: "anon@anon.f"
    }​
  }​,
  setCustomerField: {​
    onChange: {​
      callbackFunction: (layoutData, event) => {​
        const divisions = event
          .find(cf => cf.fieldLabel == 'Divisions')
          .customFieldOptions.map(cf => {​
            return {​
              label: cf.name,
              value: cf.id
            }​;
          }​);
        layoutData.items.columns[0].internalColumns[0].preLoadedOptions = divisions;
      }​
    }​
  }​,
  setOwnersReferences: {​
    onChange: {​
      callbackFunction: (layoutData, event) => {​
        layoutData.owner.id.preLoadedOptions = event;
      }​
    }​
  }​,
  setVendorsReferences: {​
    onChange: {​
      callbackFunction: (layoutData, event) => {​
        layoutData.vendor.id.preLoadedOptions = event;
      }​
    }​
  }​,
  setCurrenciesReferences: {​
    onChange: {​
      callbackFunction: (layoutData, event) => {​
        layoutData.currency.id.preLoadedOptions = event;
      }​
    }​
  }​,
  setCountriesReferences: {​
    onChange: {​
      callbackFunction: (layoutData, event) => {​
        layoutData.owner.address.country.id.preLoadedOptions = event;
        layoutData.vendor.address.country.id.preLoadedOptions = event;
      }​
    }​
  }​,
  setAssigneesReferences: {​
    onChange: {​
      executeFunction: 'setAssigneesReferences',
      callbackFunction: (layoutData, event) => {​
        layoutData.items.columns[0].aditionalInputs[0].preLoadedOptions = event;
      }​
    }​
  }​,
  requestedFor: {​
    label: 'Requested For',
    labelDescription: 'set the PO requested for what?',
    required: true,
    type: eFormControlType.Input,
    value: '',
    formControlName: 'requestedFor',
    class: 'col-12 p-0',
    controlClass: 'col-12 p-1'
  }​,
  paymentTerms: {​
    label: 'Payment Terms',
    labelDescription: 'set the PO paymentTerms.',
    required: true,
    type: eFormControlType.Input,
    value: '',
    formControlName: 'paymentTerms',
    class: 'col-12 p-0 mt-3',
    controlClass: 'col-12 p-1'
  }​,
  items: {​
    columns: [
      {​
        label: 'ITEM DESCRIPTION',
        value: 'description',
        formControlName: 'description',
        width: '50%',
        isRequired: true,
        internalColumns: [
          {​
            label: 'DIVISIONS',
            value: 'customFields.divisionsName',
            formControlName: 'divisionsId',
            type: eFormControlType.Dropdown,
            preLoadedOptions: [],
            class: 'col-3 px-1 pl-0',
            isBussinessColumn: true,
            BussinessValue: "customFields['divisionsId']",
            onChange: {​
              callbackFunction: (layoutData, itemId, event) => {​
                const item = layoutData.items
                  .data(layoutData)
                  .find(it => it.id == itemId);
                console.log(item);
                console.log(layoutData);
                console.log(event);
              }​
            }​
          }​,
          {​
            label: 'GL CODE',
            value: 'glCode',
            formControlName: 'glCode',
            type: eFormControlType.Dropdown,
            preLoadedOptions: [],
            class: 'col-3 p-0'
          }​
        ],
        aditionalInputs: [
          {​
            label: 'ALLOCATED TO',
            value: 'assigneeTo',
            formControlName: 'assigneeTo',
            type: eFormControlType.Dropdown,
            preLoadedOptions: [],
            hasAccordionGroups: true,
            isGroupDropdown: true,
            displayImage: true,
            class: 'col-6 p-0',
            isRequired: true,
            onChange: {​
              executeFunction: 'setItemListFormArray',
              callbackFunction: (layoutData, event) => {​}​
            }​
          }​
        ]
      }​,
      {​
        label: 'QTY',
        value: 'quantity',
        formControlName: 'quantity',
        class: 'text-right',
        isTextAlignRight: true,
        width: '10%',
        type: eFormControlType.Number,
        isRequired: true
      }​,
      {​
        label: 'RATE/UNIT COST',
        value: 'rate',
        formControlName: 'rate',
        class: 'text-right',
        isTextAlignRight: true,
        width: '15%',
        type: eFormControlType.Number,
        isRequired: true
      }​,
      {​
        label: 'TAX',
        value: 'tax',
        formControlName: 'tax',
        class: 'text-right',
        isTextAlignRight: true,
        width: '10%',
        type: eFormControlType.Number,
        isRequired: true
      }​,
      {​
        label: 'LINE TOTAL',
        value: 'lineTotal',
        formControlName: 'lineTotal',
        class: 'text-right',
        isTotal: true,
        width: '10',
        isRequired: true
      }​
    ],
    dataTemplate: {​
      idx: 0,
      pageId: 0,
      description: '-',
      customFields: [{​ divisionsId: null }​, {​ divisionsName: '' }​],
      quantity: 0,
      rate: 0,
      tax: 0,
      assigneeTo: null,
      lineTotal: rowData => {​
        return rowData['quantity'] * rowData['rate'];
      }​
    }​,
    data: layoutData => {​
      let items = [];
      layoutData.pages.forEach(p => {​
        items = items.concat(p.items);
      }​);
      return items;
    }​,
    addItem: (layoutData, item?) => {​
      const pageLength = layoutData.pages.length;
      const page = layoutData.pages[pageLength - 1];
      const itemsLength = layoutData.pages[pageLength - 1].items.length;
      let _item = item || {​
        id: 0,
        pageId: page.id,
        description: '-',
        order: '-',
        divisions: '-',
        glCode: '-',
        quantity: 0,
        rate: '-',
        tax: 0,
        assigneeTo: null,
        lineTotal: rowData => {​
          return rowData['quantity'] * rowData['tax'];
        }​
      }​;
      if (itemsLength <= page.MaxItemsLength) {​
        _item.id = itemsLength;
        _item.pageId = pageLength - 1;
        layoutData.pages[pageLength - 1].items.push(_item);
      }​ else {​
        layoutData.addPage(layoutData, pageLength, _item);
      }​
      return _item;
    }​,
    deleteItem: (layoutData, pageId, itemId) => {​
      let page = layoutData.pages[pageId];
      const index = page.items.findIndex(it => it.id == itemId);
      page.items.splice(index, 1);
      if (page.items.length == 0) {​
        const pageIndex = layoutData.pages.findIndex(p => p.id == pageId);
        layoutData.pages.splice(pageIndex, 1);
      }​
    }​,
    totalsValues: {​
      subtotal: {​ value: 0 }​
    }​,
    totalsFunctions: [
      {​
        label: 'Subtotal',
        value: layoutData => {​
          const data = layoutData.items.data(layoutData);
          if (!data) return 0;
          layoutData.items.totalsValues.subtotal.value = 0;
          data.forEach(row => {​
            layoutData.items.totalsValues.subtotal.value += row.lineTotal(
              row
            );
          }​);
          return layoutData.items.totalsValues.subtotal.value;
        }​
      }​,
      {​
        label: 'Tax',
        value: layoutData => {​
          return 0;
          // layoutData.items.totalsValues.subtotal.value *
          // ((Number.parseInt(layoutData.tax.value) || 0) / 100)
        }​
      }​,
      {​
        label: 'Other',
        value: layoutData => {​
          return 0;
          // Number.parseInt(layoutData.other.value) || 0;
        }​
      }​,
      {​
        id: 'total',
        label: 'Total (USD)',
        class: 'hyberLink font-weight-bold',
        value: layoutData => {​
          return 0;
          // layoutData.items.totalsValues.subtotal.value -
          // (layoutData.items.totalsValues.subtotal.value *
          //   ((Number.parseInt(layoutData.tax.value) || 0) / 100) +
          //   Number.parseInt(layoutData.other.value || 0))
        }​
      }​
    ]
  }​,
  onInit: layoutData => {​
    return {​
      executedFunctions: [
        {​
          funName: 'setOwnersReferences',
          event: {​
            value: null
          }​,
          element: layoutData.setOwnersReferences
        }​,
        {​
          funName: 'setVendorsReferences',
          event: {​
            value: null
          }​,
          element: layoutData.setVendorsReferences
        }​,
        {​
          funName: 'getOwnerDetails',
          event: {​
            value: 1
          }​,
          element: layoutData.owner.id
        }​,
        {​
          funName: 'setPurchaseOrderNumber',
          event: {​
            value: null
          }​,
          element: layoutData.purchaseOrderNumber
        }​,
        {​
          funName: 'setCurrenciesReferences',
          event: {​
            value: null
          }​,
          element: layoutData.setCurrenciesReferences
        }​,
        {​
          funName: 'setCountriesReferences',
          event: {​
            value: null
          }​,
          element: layoutData.setCountriesReferences
        }​,
        // {​
        //   funName: 'getCustomFields',
        //   event: {​
        //     value: null
        //   }​,
        //   element: layoutData.setCustomerField
        // }​,
        {​
          funName: 'setAssigneesReferences',
          event: {​
            value: null
          }​,
          element: layoutData.setAssigneesReferences
        }​
      ]
    }​;
  }​,
  basicInfo: layoutData => {​
    return [
      layoutData.vendor.id,
      layoutData.owner.id,
      layoutData.requestedFor,
      layoutData.actionDate,
      layoutData.deliveryDate,
      layoutData.currency.id,
      layoutData.additionalComments,
      layoutData.notes
    ];
  }​,
  billingandShippingInfo: layoutData => {​
    return [
      layoutData.owner.address.ownedbyDiffrentAddress,
      layoutData.owner.id,
      layoutData.owner.department,
      layoutData.owner.address.addressLine,
      layoutData.owner.address.street,
      layoutData.owner.address.city,
      layoutData.owner.address.state,
      layoutData.owner.address.country.id,
      // layoutData.vendor.address.vendorDifferentAddress,
      // layoutData.vendor.id,
      // layoutData.vendor.department,
      // layoutData.vendor.address.addressLine,
      // layoutData.vendor.address.street,
      // layoutData.vendor.address.city,
      // layoutData.vendor.address.state,
      // layoutData.vendor.address.country.id,
      layoutData.paymentTerms
    ];
  }​
}​

public static html = ` <div class="pageContainer" *ngFor="let page of data.pages; let i = index">
<page>
  <div class="IMG">
    <ng-container *ngFor="let template of page.templates">
      <ng-container [ngSwitch]="template">
        <ng-container *ngSwitchCase="'header'">
          <ng-container *ngTemplateOutlet="header"></ng-container>
        </ng-container>

        <ng-container *ngSwitchCase="'owner_vendor_details'">
          <ng-container *ngTemplateOutlet="owner_vendor_details"></ng-container>
        </ng-container>

        <ng-container *ngSwitchCase="'hr'">
          <ng-container *ngTemplateOutlet="hr"></ng-container>
        </ng-container>

        <!--  <ng-container *ngSwitchCase="'re'">
          <ng-container *ngTemplateOutlet="re"></ng-container>
        </ng-container> -->

        <ng-container *ngSwitchCase="'itemList'">
          <ng-container
            *ngTemplateOutlet="
              itemList;
              context: { columns: data.items.columns, items: page.items }
            "
          ></ng-container>
        </ng-container>
        <ng-container *ngIf="i == data.pages.length - 1">
          <ng-container *ngSwitchCase="'totals'">
            <ng-container *ngTemplateOutlet="totals"></ng-container>
          </ng-container>

          <ng-container *ngSwitchCase="'enquiries'">
            <ng-container *ngTemplateOutlet="enquiries"></ng-container>
          </ng-container>

          <ng-container *ngSwitchCase="'additionalComments'">
            <ng-container
              *ngTemplateOutlet="additionalComments"
            ></ng-container>
          </ng-container>
          <ng-container *ngSwitchCase="'notes'">
            <ng-container *ngTemplateOutlet="notes"></ng-container>
          </ng-container>
        </ng-container>

        <ng-container *ngSwitchCase="'footerNotes'">
          <ng-container *ngTemplateOutlet="footerNotes"></ng-container>
        </ng-container>

        <ng-container *ngSwitchCase="'footer'">
          <ng-container
            *ngTemplateOutlet="footer; context: { pageNumber: i + 1 }"
          ></ng-container>
        </ng-container>
      </ng-container>
    </ng-container>
  </div>
</page>
</div>

<ng-template #hr><hr /></ng-template>
<ng-template #header>
<div class="d-flex flex-row">
  <div class="col-8 p-0 justify-content-start">
    <img [src]="data.logoSrc.value" height="50px" />
  </div>
  <div class="col-4 p-0 justify-content-end">
    <div class="d-flex flex-row">
      <div class="col p-0 justify-content-start">
        <p class="mb-0 labelDescription">Purchase Order#</p>
        <p class="mb-0 labelDescription">Vendor Ref#</p>
        <p class="mb-0 labelDescription">Date</p>
        <p class="mb-0 labelDescription">Currency</p>
      </div>
      <div class="col p-0 justify-content-end text-right">
        <p class="mb-0 font-weight-bold">{{ data.purchaseOrderNumber.value }}</p>
        <p class="mb-0 font-weight-bold">{{ data.vendor.vendorRef.value }}</p>
        <p class="mb-0 font-weight-bold">{{ data.actionDate.value | date }}</p>
        <p class="mb-0 font-weight-bold">{{ data.currency.name.value }}</p>
      </div>
    </div>
  </div>
</div>
</ng-template>

<ng-template #owner_vendor_details>
<div class="d-flex flex-row">
<div class="col p-0 justify-content-start">
    <p class="mb-1 hyberLink">VENDOR</p>
    <h6 class="mb-0">{{ data.vendor.legalName.value }}</h6>
      <!-- <p class="labelDescription mb-3"> {{ data.vendor.name.value }} </p>-->

    <p class="mb-0 labelDescription">
      {{ data.vendor.address.street.value }}
    </p>
    <p class="mb-0 labelDescription">
      {{ data.vendor.address.state.value? data.vendor.address.state.value+', ':''}}{{ data.vendor.address.postalCode.value }}
    </p>
    <p class="mb-0 labelDescription">
      {{ data.vendor.address.city.value }}
    </p>
    <p class="mb-0 labelDescription">{{ data.vendor.address.country.name.value }}</p>
    <p class="mb-0 labelDescription" *ngIf=" data.vendor.phone.value">
      Tel:
      <span class="pl-2">
        {{ data.vendor.phone.value }}
      </span>
    </p>
    <p class="mb-0 labelDescription" *ngIf="data.vendor.fax.value">
      Fax:
      <span class="pl-2">
        {{ data.vendor.fax.value }}
      </span>
    </p>
  </div>

  <div class="col p-0 justify-content-end">
    <p class="mb-1 hyberLink">SHIP TO</p>
    <h6 class="mb-0">{{ data.company.name.value }}</h6>

    <!--  <p class="labelDescription mb-3"> {{ data.owner.name.value }}</p> -->

    <p class="mb-0 labelDescription">
      {{ data.owner.address.street.value }}
    </p>
    <p class="mb-0 labelDescription">
      {{ data.owner.address.state.value?data.owner.address.state.value+', ':'' }}{{ data.owner.address.postalCode.value }}
    </p>
    <p class="mb-0 labelDescription">
      {{ data.owner.address.city.value }}
    </p>
    <p class="mb-0 labelDescription">{{ data.owner.address.country.name.value }}</p>

    <p class="mb-0 labelDescription" *ngIf="data.owner.phone.value">
      Tel:<span class="pl-2 "> {{ data.owner.phone.value }}</span>
    </p>

    <p class="mb-0 labelDescription" *ngIf="data.owner.email.value">
      mail:<span class="pl-2">
        {{ data.owner.email.value }}
      </span>
    </p>
  </div>

</div>
</ng-template>


<!-- <ng-template #re>
<div class="mt-4">
<h6 class="mb-0">RE: {{data.vendor.name.value}}</h6>
    <p class="m-0 mt-1 mb-n2 labelDescription">We hereby place our order for the following:</p>
</div>
</ng-template> -->

<ng-template #itemList let-items="items" let-columns="columns">
<table class="table table-sm mt-3">
  <thead>
    <tr>
      <th scope="col" class="{{col.class}}" *ngFor="let col of columns">
        {{ col.label }}
        <div
          *ngIf="col.internalColumns"
          class="d-flex flex-row justify-content-between pr-5"
        >
          <span
            class="labelDescription font-size-12"
            *ngFor="let internalCol of col.internalColumns"
          >
            {{ internalCol.label }}
          </span>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let rowData of items">
      <td class="{{col.class}}" *ngFor="let col of columns">
        {{
          !col.isTotal ? (rowData[col.value]||'-') : rowData[col.value](rowData) | number:'0.2-2':'en-US'
        }}

        <div
          *ngIf="col.internalColumns"
          class="d-flex flex-row justify-content-between pr-5"
        >
          <span
            class="labelDescription font-size-12"
            *ngFor="let internalCol of col.internalColumns"
          >
            {{ rowData[internalCol.value] ||'-'}}
          </span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</ng-template>

<ng-template #totals>
<div class="d-flex justify-content-between">
  <div class="col-8 pr-5"></div>
  <div class="col-4 p-0">
    <div
    *ngFor="let rowData of data.items.totalsFunctions"
    class="d-flex justify-content-between {{rowData.class}}"
    >
      <p class="mb-1">{{ rowData.label }}</p>
      <p class="mb-1 font-weight-bold">
        {{data.currency.symbol.value}} {{ rowData.value(data) | number:'1.2-2':'en-US' }}
      </p>
    </div>
  </div>
</div>
</ng-template>

<ng-template #enquiries>
<div class="d-flex mt-1">
  <div class="col-10 p-0">
    <p class="mb-1 font-weight-bold">
      Enquiries regarding this order should be directed to:
    </p>
    <div class="d-flex hyberLink">
      <span>{{ data.owner.name.value }}</span>
      <span class="pl-3">{{ data.owner.phone.value }}</span>
      <span class="pl-3">{{ data.owner.email.value }}</span>
    </div>
  </div>
</div>
</ng-template>

<ng-template #additionalComments>
<div class="d-flex justify-content-between mt-3">
  <div class="col-10 p-0">
    <p class="mb-1 font-weight-bold">
      Additional Comments:
    </p>
    <div class="d-flex labelDescription">
      {{ data.additionalComments.value }}
    </div>
  </div>
</div>
</ng-template>

<ng-template #notes>
<div class="d-flex justify-content-between mt-3">
  <div class="col-10 p-0">
    <p class="mb-1 font-weight-bold">
      Notes:
    </p>
    <div class="d-flex labelDescription">
      {{ data.notes.value }}
    </div>
  </div>
</div>
</ng-template>

<ng-template #footerNotes>
<div class="d-flex justify-content-between mt-3">
  <div class="col-10 p-0 labelDescription">
    {{ data.footerNotes.value }}
  </div>
</div>
</ng-template>

<ng-template #footer let-pageNumber="pageNumber">
<div class="d-flex flex-row labelDescription footer">
  <div class="col p-0">
    Purchase Order # {{ data.purchaseOrderNumber.value }}
  </div>
  <div class="col text-right">
    Page {{ pageNumber }} of {{ data.pages.length }}
  </div>
</div>
</ng-template>
`;
public static style = `.IMG {
  position: relative;
  height: 100%;
  font-size: 13px;
  padding: 20px;
}
h6 {
  font-weight: bold;
}
th {
  border-top: none;
  border-bottom: 1px solid #dee2e6 !important;
  vertical-align: top !important;
  line-height: 1.5 !important;
}
.hyberLink {
  color: #1c63b7;
  font-weight: bold;
}
.footer{
    position: absolute;
    width: 96.5%;
    bottom: 15px;
}
.font-size-12{
  font-size: 12px;
}
`;
}
