function confirmPW() {
    if (document.querySelector('password').value ==
    document.querySelector('confirm-pw').value) {
    document.querySelector('confirm_pw').style.color = '#596D48';
    document.querySelector('passwords').style.border = '1px solid #596D48';
    document.querySelector('confirm_pw').innerHTML = 'Passwords match';
  } else {
    document.querySelector('confirm_pw').style.color = '#E60026';
    document.querySelector('passwords').style.border = '1px solid #E60026';
    document.querySelector('confirm_pw').innerHTML = '* Passwords do not match';
    }
}