
export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  let capital = word[0].toUpperCase();
  let sliced = word.toLowerCase().slice(1);
  return capital + sliced;
}

export function backDoorResponse(line) {
  let trimmed = line.trim();
  return trimmed[trimmed.length - 1];
}

export function backDoorPassword(word) {
  let polite = frontDoorPassword(word) + ", please";
  return polite;
}
frontDoorResponse('Stands so high');
frontDoorPassword('Shire');
backDoorResponse('Stands so high  ');
backDoorPassword('horse');