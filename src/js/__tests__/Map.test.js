/* eslint-disable linebreak-style */
import ErrorRepository from '../app';

const errors = [
  [100, 'Логин и пароль введены не верно'],
  [404, 'Страница не найдена'],
  [202, 'Пользователь с таким именем уже существует'],
];

test.each([
  [404, 'Страница не найдена'],
  [400, 'Unknown error'],
])(('test return  string text errror'), (code, strErr) => {
  const result = new ErrorRepository(errors);
  expect(result.translate(code)).toBe(strErr);
});
