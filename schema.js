var NodesSchema = new Schema({
  Distribution: [{ImageDesrcriptor: String, RepositoryDesriptor: String}],
  ExposedInterface:[{InterfaceIdentifier: String, InterfaceType: String, Port: String, TransmissionProtocol: String}]
  Configuration: [{Key: String, Value: String}],
  Volume: [{VolumeType: String, VolumeSource: String, VolumeTarget: String}],
  MinimumExecutionRequirements: [{ mVCPUs: String, mRAM: String, mStorage: String, HypervisorType: String}],
  ExposedMetric: [{MetricIdentifier: String, MeasurementUnit: String}],
  RequiredInterface: [{GraphLink: [{GraphLinkIdentifier: String, ComponentIdentifier: String, InterfaceIdentifier: String}]}],
  Capability: [{Scaling: String}]
});
