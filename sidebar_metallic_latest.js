module.exports =
    [
        {
            "type": "doc",
            "id": "api/cv2/Metallic/metallic-rest-api-reference"
        },
        {
            "type": "category",
            "label": "Authentication",
            "link": {
                "type": "doc",
                "id": "api/cv2/Metallic/authentication"
            },
            "items": [
                {
                    "type": "doc",
                    "id": "api/cv2/Metallic/authenticate",
                    "label": "Authenticate",
                    "className": "api-method post"
                }
            ]
        },
        {
            "type": "category",
            "label": "Partner APIs",
            "items": [
                {
                    "type": "category",
                    "label": "Resellers",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/resellers"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/create-reseller",
                            "label": "Create Reseller",
                            "className": "api-method post"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/get-resellerby-id",
                            "label": "Get Reseller by Id",
                            "className": "api-method get"
                        }
                    ]
                },
                {
                    "type": "category",
                    "label": "Rate Card",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/rate-card"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/get-rate-card",
                            "label": "Get Rate Card",
                            "className": "api-method get"
                        }
                    ]
                },
                {
                    "type": "category",
                    "label": "Fulfilments",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/fulfilments"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/submit-fulfilment",
                            "label": "Submit Fulfilment",
                            "className": "api-method post"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/list-fulfillments",
                            "label": "List Fulfillments",
                            "className": "api-method get"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/get-fulfillmentby-id",
                            "label": "Get Fulfillment by Id",
                            "className": "api-method get"
                        }
                    ]
                },
                {
                    "type": "category",
                    "label": "Accounts",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/accounts"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/get-accountby-id",
                            "label": "Get Account by Id",
                            "className": "api-method get"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/list-accounts",
                            "label": "List Accounts",
                            "className": "api-method get"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/deactivate-account",
                            "label": "Deactivate Account",
                            "className": "api-method put"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/activate-account",
                            "label": "Activate Account",
                            "className": "api-method put"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/update-account",
                            "label": "Update Account",
                            "className": "api-method patch"
                        }
                    ]
                },
                {
                    "type": "category",
                    "label": "Usage",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/usage"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/get-usage",
                            "label": "Get Usage",
                            "className": "api-method get"
                        }
                    ]
                },
                {
                    "type": "category",
                    "label": "Users",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/users"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/create-user",
                            "label": "Create User",
                            "className": "api-method post"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/list-users",
                            "label": "List Users",
                            "className": "api-method get"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/get-userby-id",
                            "label": "Get User by Id",
                            "className": "api-method get"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/update-user-name",
                            "label": "Update User Name",
                            "className": "api-method put"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/delete-user",
                            "label": "Delete User",
                            "className": "api-method delete"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/update-user-roles",
                            "label": "Update User Roles",
                            "className": "api-method put"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/update-user-managed-accounts",
                            "label": "Update User Managed Accounts",
                            "className": "api-method put"
                        }
                    ]
                }
            ]
        },
        {
            "type": "category",
            "label": "Databases",
            "items": [
                {
                    "type": "category",
                    "label": "Instance Operations",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/instance-operations"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/list-database-instances",
                            "label": "List Database Instances",
                            "className": "api-method get"
                        }
                    ]
                },
                {
                    "type": "category",
                    "label": "Microsoft Azure",
                    "items": [
                        {
                            "type": "category",
                            "label": "Prerequisite Operations",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/prerequisite-operations"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-region",
                                    "label": "Select Region",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-backup-gateway",
                                    "label": "Select Backup Gateway",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-storage",
                                    "label": "Select Storage",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-new-storage",
                                    "label": "Configure New Storage",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-existing-plan",
                                    "label": "Select Existing Plan",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/get-select-region",
                                    "label": "Select Region",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/create-new-plan",
                                    "label": "Create New Plan",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-storage-credentials-azure-byo-sonly",
                                    "label": "Select Cloud Storage Credentials (Azure BYOS only)",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/add-azure-iam-app-credentials-copy",
                                    "label": "Add Azure (IAM App) Credentials Copy",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-account",
                                    "label": "Select Cloud Account",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-cloud-account",
                                    "label": "Configure Cloud Account",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-azure-storage-credentials-byos-only",
                                    "label": "Configure Azure Storage Credentials (BYOS Only)",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-azure-credentials",
                                    "label": "Select Azure Credentials",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-storage-1",
                                    "label": "Select Storage1",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-new-storage-1",
                                    "label": "Configure New Storage1",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-storage-byos-credential",
                                    "label": "Select Cloud Storage (BYOS) credential",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/add-azure-iam-app-credentials",
                                    "label": "Add Azure (IAM App) Credentials",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/get-select-existing-plan",
                                    "label": "Select Existing Plan",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/create-new-plan-1",
                                    "label": "Create New Plan1",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-account-1",
                                    "label": "Select Cloud Account1",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-cloud-account-1",
                                    "label": "Configure Cloud Account1",
                                    "className": "api-method post"
                                }
                            ]
                        },
                        {
                            "type": "category",
                            "label": "CosmosDB",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/cosmos-db"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-backup-clientfor-cosmos-db-instance",
                                    "label": "Configure Backup Client for CosmosDB Instance",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-backup-content",
                                    "label": "Select Backup Content",
                                    "className": "api-method post"
                                }
                            ]
                        },
                        {
                            "type": "category",
                            "label": "MariaDB",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/maria-db"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-database-instance",
                                    "label": "Select Database Instance",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-backup-clientfor-maria-db-instance",
                                    "label": "Configure Backup Client for MariaDB Instance",
                                    "className": "api-method post"
                                }
                            ]
                        },
                        {
                            "type": "category",
                            "label": "MySQL",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/my-sql"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/get-select-database-instance",
                                    "label": "Select Database Instance :  MYSQL",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-backup-client-my-sql-instance",
                                    "label": "Configure Backup Client MySQL Instance",
                                    "className": "api-method post"
                                }
                            ]
                        },
                        {
                            "type": "category",
                            "label": "PostgreSQL",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/postgre-sql"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/get-select-database-instance-1",
                                    "label": "Select Database Instance",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-backup-client-postgre-sql-instance",
                                    "label": "Configure Backup Client PostgreSQL Instance",
                                    "className": "api-method post"
                                }
                            ]
                        },
                        {
                            "type": "category",
                            "label": "Azure SQL Server and Managed SQL",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/azure-sql-server-and-managed-sql"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-database-instance-sql-instance",
                                    "label": "Select Database Instance SQL Instance",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-backup-client",
                                    "label": "Configure Backup Client",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-azure-sql-sql-managed-authentication",
                                    "label": "Select Azure SQL/SQL Managed  Authentication",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-azure-sql-sql-managed-authentication",
                                    "label": "Configure Azure SQL/SQL Managed Authentication",
                                    "className": "api-method post"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        
        {
            "type": "category",
            "label": "Virtualization",
            "items": [
                {
                    "type": "category",
                    "label": "Microsoft Azure",
                    "items": [
                        {
                            "type": "category",
                            "label": "Prerequisite Operations",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/prerequisite-operations"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-region",
                                    "label": "Select Region",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-backup-gateway",
                                    "label": "Select Backup Gateway",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-storage",
                                    "label": "Select Storage",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-new-storage",
                                    "label": "Configure New Storage",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-existing-plan",
                                    "label": "Select Existing Plan",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/get-select-region",
                                    "label": "Select Region",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/create-new-plan",
                                    "label": "Create New Plan",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-storage-credentials-azure-byo-sonly",
                                    "label": "Select Cloud Storage Credentials (Azure BYOS only)",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/add-azure-iam-app-credentials-copy",
                                    "label": "Add Azure (IAM App) Credentials Copy",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-account",
                                    "label": "Select Cloud Account",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-cloud-account",
                                    "label": "Configure Cloud Account",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-azure-storage-credentials-byos-only",
                                    "label": "Configure Azure Storage Credentials (BYOS Only)",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-azure-credentials",
                                    "label": "Select Azure Credentials",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-storage-1",
                                    "label": "Select Storage1",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-new-storage-1",
                                    "label": "Configure New Storage1",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-storage-byos-credential",
                                    "label": "Select Cloud Storage (BYOS) credential",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/add-azure-iam-app-credentials",
                                    "label": "Add Azure (IAM App) Credentials",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/get-select-existing-plan",
                                    "label": "Select Existing Plan",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/create-new-plan-1",
                                    "label": "Create New Plan1",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/select-cloud-account-1",
                                    "label": "Select Cloud Account1",
                                    "className": "api-method get"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-cloud-account-1",
                                    "label": "Configure Cloud Account1",
                                    "className": "api-method post"
                                }
                            ]
                        },
                        {
                            "type": "category",
                            "label": "VM Content Operations",
                            "link": {
                                "type": "doc",
                                "id": "api/cv2/Metallic/vm-content-operations"
                            },
                            "items": [
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/enable-intellisnap",
                                    "label": "Enable Intellisnap",
                                    "className": "api-method put"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/run-backupfor-v-mor-vm-group",
                                    "label": "Run Backup for VM or VM Group",
                                    "className": "api-method post"
                                },
                                {
                                    "type": "doc",
                                    "id": "api/cv2/Metallic/configure-backupcontentin-vm-groupforcloud-account-backup-copy",
                                    "label": "Configure Backup content in VMGroup for cloud Account Backup Copy",
                                    "className": "api-method post"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "category",
                    "label": "Common Operations",
                    "link": {
                        "type": "doc",
                        "id": "api/cv2/Metallic/common-operations"
                    },
                    "items": [
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/list-vm-groups",
                            "label": "List VMGroups",
                            "className": "api-method get"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/list-virtual-machines",
                            "label": "List Virtual Machines",
                            "className": "api-method get"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/vm-group-activitycontrol-actions",
                            "label": "VMGroup Activity control Actions",
                            "className": "api-method put"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/deletethe-vm-group",
                            "label": "Delete the VM Group",
                            "className": "api-method delete"
                        },
                        {
                            "type": "doc",
                            "id": "api/cv2/Metallic/vm-group-settings",
                            "label": "VMGroup Settings",
                            "className": "api-method put"
                        }
                    ]
                }
            ],

        }
    ];