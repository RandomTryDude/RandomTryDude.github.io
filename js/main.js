const userInput = document.getElementById('userInput');
const dummyKeyboard = document.getElementById('dummyKeyboard');
const terminalOutput = document.getElementById('terminalOutput');

function displayCommandOutput(command, response) {
  // Display user input
  const commandLine = document.createElement('div');
  commandLine.classList.add('terminal-line');
  commandLine.innerHTML = `<span class="id">┌──Zsociety</span>@<span class="pc-name">Team</span><br><span class="directory">└─$</span> <span class="user-input">${command}</span>`;
  terminalOutput.appendChild(commandLine);

  // Display command response
  const responseLines = response.split('\n');
  responseLines.forEach((line) => {
    const responseLine = document.createElement('div');
    responseLine.classList.add('terminal-line');

    // Convert URLs to clickable links
    const lineWithLinks = line.replace(/(https?:\/\/[^\s]+)/g, function (url) {
      if (url.includes('linkedin.com')) {
        return `<a href="${url}" target="_blank">[LinkedIn]</a>`;
      } else if (url.includes('discord.com')) {
        return `<a href="${url}" target="_blank">[Discord]</a>`;
      } else {
        return `<a href="${url}" target="_blank">${url}</a>`;
      }
    });

    responseLine.innerHTML = lineWithLinks;
    terminalOutput.appendChild(responseLine);
  });

  // Scroll to the bottom
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


function updateUserInput(value) {
  // Update user input display
  userInput.textContent = value;
}

dummyKeyboard.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    // Handle Enter key press
    const command = dummyKeyboard.value.trim();
    const response = getCommandResponse(command);
    displayCommandOutput(command, response);

    // Clear input after processing
    dummyKeyboard.value = '';
    updateUserInput('');
  }
});

function getCommandResponse(command) {
  // Command & responses
  const commands = {
    'help': 'Available commands: social, help, about, contact , Zsociety , todo',
    'social': 'You can find us on https://discord.com/invite/da4fD5pf4e & https://www.linkedin.com/company/zdsociety/ \n both Links are usable and will open a new windows',
    'about': 'Terminal-Like, Learn more about the team',
    'contact': '==============================\nSpaceJam on the Network, Contact unreachable\n============================== \n + ................... + \n Contact Aborted \n  + ................... + ',
    'HiddenSecret': "Can't believe you found me, Take it, you own it Zsociety{S0m3_C0mm4nd5_4r3_h1dd3n}",
     'Zsociety': 'We are a team of enthusiasts dedicated to exploring and sharing knowledge in various domains.\n Our passion drives us to push boundaries and contribute to the ever-growing world of technology and beyond.\nJoin us on this exciting journey!',
     'todo' : 'implement a clear command & workaround for case-sensitive content ',
  };

  return commands[command] || `Ain't seen no ${command} in help`;
}

