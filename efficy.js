
const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const Module = class {
  constructor() {
  }


  start() {
    // Start modifying the form elements here!
	  // You are allowed to add extra methods and properties to this class
    const form=document.querySelector('form')
    const select = document.querySelector("select")
    const input = document.querySelector('input')
    const button=document.querySelector('button')
    const output = document.querySelector('.output')
    let resultOutput = {"status" : oppoStatus[0].K_OPPO_STATUS ,"success" : oppoStatus[0].SUCCESS}
    
    const ndiv = document.createElement("div")
    ndiv.appendChild(button)
    form.appendChild(ndiv)

    input.setAttribute('class', 'success')

    for (let i = 0; i < oppoStatus.length; i++){
      const option = document.createElement("option")
      option.textContent = oppoStatus[ i ].STATUS
      select.appendChild(option)
    }

    select.addEventListener('change', (e) => {
      const success = oppoStatus.filter((status) => status.STATUS === e.target.value)
      resultOutput = {"status" : success[0].K_OPPO_STATUS ,"success" : success[0].SUCCESS}
      input.value = resultOutput.success
      return
    })

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      return output.innerHTML = JSON.stringify(resultOutput)
    })
  }
}

const main = new Module();
main.start();
