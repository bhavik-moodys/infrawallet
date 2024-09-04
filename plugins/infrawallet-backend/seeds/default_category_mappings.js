exports.seed = async knex => {
  await knex('category_mappings_default').del();
  await knex('category_mappings_default').insert([
    {
      provider: 'azure',
      category: 'Analytics',
      // make it compatible with sqlite
      cloud_service_names: JSON.stringify(['Event Hubs', 'Log Analytics']),
    },
    {
      provider: 'azure',
      category: 'Application Integration',
      cloud_service_names: JSON.stringify(['Logic Apps']),
    },
    {
      provider: 'azure',
      category: 'Compute',
      cloud_service_names: JSON.stringify(['Virtual Machines', 'Azure App Service', 'Functions']),
    },
    {
      provider: 'azure',
      category: 'Containers',
      cloud_service_names: JSON.stringify(['Azure Container Apps', 'Container Registry']),
    },
    {
      provider: 'azure',
      category: 'Database',
      cloud_service_names: JSON.stringify([
        'Azure Cosmos DB',
        'Azure Data Factory v2',
        'Azure Database for MySQL',
        'Redis Cache',
        'SQL Database',
      ]),
    },
    {
      provider: 'azure',
      category: 'Developer Tools',
      cloud_service_names: JSON.stringify(['Azure DevOps', 'Notification Hubs', 'Visual Studio Subscription']),
    },
    {
      provider: 'azure',
      category: 'DevOps',
      cloud_service_names: JSON.stringify(['Azure Monitor']),
    },
    {
      provider: 'azure',
      category: 'Internet of Things',
      cloud_service_names: JSON.stringify(['Event Grid', 'IoT Hub']),
    },
    {
      provider: 'azure',
      category: 'Artificial Intelligence',
      cloud_service_names: JSON.stringify(['Azure Cognitive Search', 'Azure Databricks', 'Cognitive Services']),
    },
    {
      provider: 'azure',
      category: 'Management & Governance',
      cloud_service_names: JSON.stringify(['Network Watcher']),
    },
    {
      provider: 'azure',
      category: 'Networking',
      cloud_service_names: JSON.stringify([
        'Azure DNS',
        'Azure Front Door Service',
        'Bandwidth',
        'Content Delivery Network',
        'Load Balancer',
        'NAT Gateway',
        'Network Traversal',
        'Service Bus',
        'Traffic Manager',
        'Virtual Network',
        'VPN Gateway',
      ]),
    },
    {
      provider: 'azure',
      category: 'Security, Identity, & Compliance',
      cloud_service_names: JSON.stringify(['Azure Firewall', 'Key Vault', 'Microsoft Defender for Cloud']),
    },
    {
      provider: 'azure',
      category: 'Storage',
      cloud_service_names: JSON.stringify(['Storage']),
    },
    {
      provider: 'azure',
      category: 'Front-End Web & Mobile',
      cloud_service_names: JSON.stringify(['Azure Maps']),
    },
    {
      provider: 'aws',
      category: 'Analytics',
      cloud_service_names: JSON.stringify([
        'Amazon Kinesis',
        'Amazon Managed Streaming for Apache Kafka',
        'Amazon OpenSearch Service',
        'Amazon QuickSight',
        'Amazon Redshift',
        'AWS Glue',
      ]),
    },
    {
      provider: 'aws',
      category: 'Application Integration',
      cloud_service_names: JSON.stringify([
        'Amazon API Gateway',
        'Amazon Simple Notification Service',
        'Amazon Simple Queue Service',
        'AWS Step Functions',
      ]),
    },
    {
      provider: 'aws',
      category: 'Artificial Intelligence',
      cloud_service_names: JSON.stringify(['Amazon Kendra', 'Amazon SageMaker', 'Amazon Bedrock']),
    },
    {
      provider: 'aws',
      category: 'Cloud Financial Management',
      cloud_service_names: JSON.stringify(['AWS Cost Explorer']),
    },
    {
      provider: 'aws',
      category: 'Compute',
      cloud_service_names: JSON.stringify(['EC2 - Other', 'Amazon Elastic Compute Cloud - Compute', 'AWS Lambda']),
    },
    {
      provider: 'aws',
      category: 'Containers',
      cloud_service_names: JSON.stringify([
        'Amazon Elastic Container Service for Kubernetes',
        'Amazon Elastic Container Service',
        'Amazon EC2 Container Registry (ECR)',
      ]),
    },
    {
      provider: 'aws',
      category: 'Database',
      cloud_service_names: JSON.stringify([
        'Amazon DynamoDB',
        'Amazon ElastiCache',
        'Amazon Neptune',
        'Amazon Relational Database Service',
        'Amazon Timestream',
        'DynamoDB Accelerator (DAX)',
      ]),
    },
    {
      provider: 'aws',
      category: 'Developer Tools',
      cloud_service_names: JSON.stringify(['AWS CloudShell', 'AWS CodeArtifact', 'AWS X-Ray']),
    },
    {
      provider: 'aws',
      category: 'Internet of Things',
      cloud_service_names: JSON.stringify(['AWS IoT', 'AWS IoT Device Defender', 'AWS IoT Device Management']),
    },
    {
      provider: 'aws',
      category: 'Management & Governance',
      cloud_service_names: JSON.stringify([
        'AmazonCloudWatch',
        'CloudWatch Events',
        'AWS CloudFormation',
        'AWS CloudTrail',
        'AWS Config',
        'AWS Service Catalog',
        'AWS Systems Manager',
      ]),
    },
    {
      provider: 'aws',
      category: 'Migration',
      cloud_service_names: JSON.stringify(['AWS Database Migration Service', 'AWS Migration Hub Refactor Spaces']),
    },
    {
      provider: 'aws',
      category: 'Networking',
      cloud_service_names: JSON.stringify([
        'Amazon Elastic Load Balancing',
        'Amazon Route 53',
        'Amazon Virtual Private Cloud',
        'AWS Global Accelerator',
      ]),
    },
    {
      provider: 'aws',
      category: 'Security, Identity, & Compliance',
      cloud_service_names: JSON.stringify([
        'Amazon Cognito',
        'Amazon GuardDuty',
        'Amazon Inspector',
        'Amazon Verified Permissions',
        'AWS Certificate Manager',
        'AWS Key Management Service',
        'AWS Secrets Manager',
        'AWS Security Hub',
        'AWS WAF',
      ]),
    },
    {
      provider: 'aws',
      category: 'Storage',
      cloud_service_names: JSON.stringify([
        'Amazon Elastic File System',
        'Amazon Glacier',
        'Amazon Simple Storage Service',
      ]),
    },
    {
      provider: 'aws',
      category: 'Front-End Web & Mobile',
      cloud_service_names: JSON.stringify([
        'Amazon Location Service',
        'Amazon Simple Email Service',
        'AWS Device Farm',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Compute',
      cloud_service_names: JSON.stringify([
        'App Engine',
        'Batch',
        'Compute Engine',
        'Google Cloud VMware Engine (GCVE)',
        'VM Manager',
        'Workload Manager',
        'Cloud Run',
        'Cloud Functions',
        'Cloud Functions for Firebase',
        'Cloud Scheduler',
        'Cloud Tasks',
        'Eventarc',
        'Workflows',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Storage',
      cloud_service_names: JSON.stringify([
        'Backup for GKE',
        'Cloud Storage',
        'Persistent Disk',
        'Cloud Filestore',
        'Cloud Storage for Firebase',
        'NetApp Volumes',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Database',
      cloud_service_names: JSON.stringify([
        'AlloyDB',
        'Cloud Bigtable',
        'Datastore',
        'Firestore',
        'Memorystore',
        'Cloud Memorystore for Redis',
        'Cloud Spanner',
        'Cloud SQL',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Networking',
      cloud_service_names: JSON.stringify([
        'Networking',
        'Cloud CDN',
        'Cloud DNS',
        'Cloud IDS (Cloud Intrusion Detection System)',
        'Cloud Interconnect',
        'Cloud Load Balancing',
        'Cloud NAT (Network Address Translation)',
        'Cloud NGFW',
        'Cloud NGFW Enterprise',
        'Cloud Router',
        'Cloud VPN',
        'Google Cloud Armor',
        'Google Cloud Armor Enterprise',
        'Media CDN',
        'Network Connectivity Center',
        'Network Intelligence Center',
        'Network Service Tiers',
        'Secure Web Proxy (SWP)',
        'Service Directory',
        'Spectrum Access System',
        'Telecom Network Automation',
        'Traffic Director',
        'Virtual Private Cloud',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Operations',
      cloud_service_names: JSON.stringify([
        'Cloud Logging',
        'Cloud Error Reporting',
        'Cloud Monitoring',
        'Cloud Profiler',
        'Cloud Trace',
        'Google Cloud Backup and DR',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Developer Tools',
      cloud_service_names: JSON.stringify([
        'Artifact Registry',
        'Assured Open Source Software (AOSS)',
        'Cloud Build',
        'Cloud Deploy',
        'Cloud Source Repositories',
        'Cloud Workstations',
        'Container Registry',
        'Firebase Test Lab',
        'Secure Source Manager',
        'Test Lab',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Analytics',
      cloud_service_names: JSON.stringify([
        'BigQuery',
        'BigQuery Storage API',
        'Cloud Composer',
        'Cloud Data Fusion',
        'Cloud Life Sciences',
        'Data Catalog',
        'Dataform',
        'Dataplex',
        'Dataflow',
        'Dataproc',
        'Dataproc Metastore',
        'Datastream',
        'Google Earth Engine',
        'Looker (Google Cloud core)',
        'Looker Studio',
        'Looker Studio Pro',
        'Cloud Pub/Sub',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Artificial Intelligence',
      cloud_service_names: JSON.stringify([
        'Agent Assist',
        'Anti Money Laundering AI (AML AI)',
        'Contact Center AI (CCAI)',
        'Contact Center AI Insights',
        'Contact Center AI (CCAI) Platform',
        'Dialogflow Essentials',
        'Dialogflow Customer Experience Edition',
        'Cloud Dialogflow API',
        'Document AI',
        'Document Workbench',
        'Human-in-the-Loop AI',
        'Document AI Warehouse',
        'Talent Solution',
        'Translation Hub',
        'Vertex AI Search for Industry',
        'Vertex AI Search for Retail',
        'Recommendations AI',
        'Recommendation Engine API',
        'Retail Search',
        'Cloud Natural Language API',
        'Cloud Translation API',
        'Cloud Vision',
        'Cloud Vision',
        'Media Translation API',
        'Speaker ID',
        'Speech On Device',
        'Speech-to-Text',
        'Cloud Text-to-Speech API',
        'Timeseries Insights API',
        'Video Intelligence API',
        'Visual Inspection AI',
        'AI Platform Data Labeling',
        'AI Platform Training and Prediction',
        'AutoML',
        'Vertex AI Platform',
        'Vertex AI Neural Architecture Search (NAS)',
        'Vertex AI Vision',
        'Gemini for Google Cloud',
        'Vertex AI API',
        'Vertex AI Conversation',
        'Vertex AI Model Garden',
        'Vertex AI Search',
        'Vertex AI Studio',
        'Vertex AI',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Application Integration',
      cloud_service_names: JSON.stringify([
        'Apigee',
        'Apigee Edge',
        'API Gateway',
        'Application Integration',
        'Cloud Endpoints',
        'Integration Connectors',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Containers',
      cloud_service_names: JSON.stringify([
        'Kubernetes Engine',
        'Google Kubernetes Engine',
        'GKE Enterprise',
        'Config Sync',
        'Policy Controller',
        'Identity Service',
        'GKE Enterprise Integration with Google Cloud Platform Services',
        'GKE Enterprise Premium Software',
        'Service Mesh',
        'GKE Autopilot',
        'Connect',
        'GKE Hub',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Security, Identity, & Compliance',
      cloud_service_names: JSON.stringify([
        'Access Transparency',
        'Assured Workloads',
        'Binary Authorization',
        'Certificate Authority Service',
        'Certificate Manager',
        'Cloud Asset Inventory',
        'Cloud External Key Manager',
        'Cloud EKM',
        'Cloud HSM',
        'Cloud Key Management Service (KMS)',
        'Event Threat Detection',
        'Key Access Justifications (KAJ)',
        'Risk Manager',
        'Security Command Center',
        'Sensitive Data Protection',
        'VPC Service Controls',
        'Secret Manager',
        'Web Security Scanner',
        'Access Approval',
        'Access Context Manager',
        'Chrome Enterprise Premium',
        'Cloud Identity Services',
        'Firebase App Check',
        'Firebase Authentication',
        'Google Cloud Identity-Aware Proxy',
        'Identity & Access Management (IAM)',
        'Identity Platform',
        'Managed Service for Microsoft Active Directory (AD)',
        'Organization Policy',
        'Resource Manager API',
      ]),
    },
    {
      provider: 'gcp',
      category: 'Internet of Things',
      cloud_service_names: JSON.stringify(['Iot Core']),
    },
    {
      provider: 'gcp',
      category: 'Developer Tools',
      cloud_service_names: JSON.stringify([
        'Google Cloud App',
        'Cloud Deployment Manager',
        'Cloud Shell',
        'Recommenders',
        'Service Infrastructure',
      ]),
    },
    {
      provider: 'mongoatlas',
      category: 'Storage',
      cloud_service_names: JSON.stringify(['Atlas Cloud Backup Storage', 'Atlas Storage']),
    },
    {
      provider: 'mongoatlas',
      category: 'Networking',
      cloud_service_names: JSON.stringify(['Data Transfer']),
    },
    {
      provider: 'mongoatlas',
      category: 'Compute',
      cloud_service_names: JSON.stringify(['Instance']),
    },
  ]);
};
