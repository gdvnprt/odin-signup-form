function confirmPW() {
    if (document.querySelector('#password').value ==
    document.querySelector('#confirm-pw').value) {
    document.querySelector('#pw_match').style.color = 'green';
    document.querySelector('#password').style.border = '1px solid green';
    document.querySelector('#confirm-pw').style.border = '1px solid green';
    document.querySelector('#pw_match').innerHTML = 'Passwords match';
  } else {
    document.querySelector('#pw_match').style.color = '#E60026';
    document.querySelector('#password').style.border = '1px solid #E60026';
    document.querySelector('#confirm-pw').style.border = '1px solid #E60026';
    document.querySelector('#pw_match').innerHTML = '* Passwords do not match';
    }
}