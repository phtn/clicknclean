// 1644017012516132
// 783b9bf9a3aff6632adeca1e4bab7717


ServiceConfiguration.configurations.remove({ service: ['google', 'facebook'] });

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  { $set: { 
  	clientId: "614540128789-bu6bvtgfejtjgsr2bvqivsb10ib15nsb.apps.googleusercontent.com", 
  	secret: "SNCQFB0xoXjIa2DW-gklpfgG" 
  } }
);

// meteor
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  { $set: { 
  	appId: "1644017012516132", 
  	secret: "783b9bf9a3aff6632adeca1e4bab7717" 
  } }
);
/*
// localhost
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  { $set: { 
    appId: "1644020509182449", 
    secret: "6f5cda4a2ff9bd8916553a99645061a4" 
  } }
);
*/