function getErrorMessage(errorCode) {
  let errorMessage;

  switch (errorCode) {
    case 400:
      errorMessage = "Введены некорректные данные.";
      break;
    case 401:
      errorMessage = "Неправильные имя пользователя и/или пароль.";
      break;
    case 403:
      errorMessage = "У вас нет доступа к этому ресурсу";
      break;
    case 404:
      errorMessage = "Ничего не найдено";
      break;
    case 409:
      errorMessage = "Пользователь с такими данными уже существует.";
      break;
    default:
      errorMessage = `Произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Попробуйте обновить страницу. Описание ошибки: ${errorCode}.`;
  }

  return errorMessage;
}

export default getErrorMessage;
