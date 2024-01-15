


let contactsdata = [
    {
      id: 0,
      Name: 'Vygandas Kavaliauskas',
      Title: function(translate) {return translate('Contacts1')},
      Mobile: function(translate) {return translate('Contacts5') + ': +370 699 16387'},
      Email: function(translate) {return translate('Contacts6') + ': vygandas@lisamora.lt'}
    },
    {
      id: 1,

      Name: 'Simona Radžiukynienė',
      Title: function(translate) {return translate('Contacts2')},
      Mobile: function(translate) {return translate('Contacts5') + ': +370 655 57566'},
      Email: function(translate) {return translate('Contacts6')+ ': simona@daita.lt'}
    },
    {
      id: 2,
      Name: 'Andrius Pileckas',
      Title: function(translate) {return translate('Contacts3')},
      Mobile: function(translate) {return translate('Contacts5') +': +370 673 69772'},
      Email: function(translate) {return translate('Contacts6') + ': andrius@lisamora.lt'}
    },
    {
        Name: 'Renaldas Streleckis',
        Title: function(translate) {return translate('Contacts4')},
        Mobile: function(translate) {return translate('Contacts5') + ': +370 699 95965'},
        Email: function(translate) {return translate('Contacts6') + ': renaldas@lisamora.lt'}
      },
  ];

  export  {contactsdata}