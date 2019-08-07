export const TODO_LIST_ADDRESS = "0xe6ec26926968c97bc0c0ddbb87e9f013c2cbd787"
export const TODO_LIST_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_content",
				"type": "string"
			}
		],
		"name": "createTask",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "content",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "completed",
				"type": "bool"
			}
		],
		"name": "TaskCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "completed",
				"type": "bool"
			}
		],
		"name": "TaskCompleted",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "toggleCompleted",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "taskCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tasks",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "content",
				"type": "string"
			},
			{
				"name": "completed",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
