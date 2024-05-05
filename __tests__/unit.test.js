// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';



//isPhoneNumber
test('valid phone number 1', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber("111-222-3334")).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber("1 + 2")).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber("123479")).toBe(false);
});


//isEmail
test('valid email 1', () => {
  expect(isEmail("123456@ucsd.edu")).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail("google2233@home.com")).toBe(true);
});
test('invalid email 1', () => {
  expect(isEmail("homeaddress@home.address")).toBe(false);
});
test('invalid email 2', () => {
  expect(isEmail("123479")).toBe(false);
});


// isStrongPassword
test('strong password 1', () => {
  expect(isStrongPassword("start_3arly")).toBe(true);
});
test('strong password 2', () => {
  expect(isStrongPassword("start_0ften")).toBe(true);
});
test('weak password without letters', () => {
  expect(isStrongPassword("12345")).toBe(false);
});
test('weak password too long', () => {
  expect(isStrongPassword("thisIsTooManyLetters")).toBe(false);
});


// isDate
test('valid date 2 digits', () => {
  expect(isDate("05/05/2024")).toBe(true);
});
test('valid date mix', () => {
  expect(isDate("5/05/2024")).toBe(true);
});
test('invalid date too many digits', () => {
  expect(isDate("005/005/2024")).toBe(false);
});
test('invalid date not enough digits', () => {
  expect(isDate("5/5/24")).toBe(false);
});


// isHexColor
test('valid hex color', () => {
  expect(isHexColor("#000000")).toBe(true);
});
test('valid hex color', () => {
  expect(isHexColor("#f0f")).toBe(true);
});
test('invalid hexcolor 1', () => {
  expect(isHexColor("808080123456")).toBe(false);
});
test('invalid hexcolor 2', () => {
  expect(isHexColor("#123123123456")).toBe(false);
});