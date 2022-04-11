/* eslint-disable */
import web3 from './web3';

const address = '0x3A6181C202a4FE8d69D78e6C9524349E586A33ED';
const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "projectStarter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "projectTitle",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "projectDesc",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			}
		],
		"name": "ProjectStarted",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "durationInDays",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountToRaise",
				"type": "uint256"
			}
		],
		"name": "startProject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "returnAllProjects",
		"outputs": [
			{
				"internalType": "contract Project[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];


const crodfundInstance = new web3.eth.Contract(abi, address);

export default crowdfundInstance;
