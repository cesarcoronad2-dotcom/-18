/* Dados para Dos: juego local con compatibilidad curada y consentimiento permanente. */
(() => {
  'use strict';
  const STORAGE_KEY = 'dados-para-dos-settings-v1';
  const all = (...ids) => ids;
  const gameData = {
    coqueto: {
      title: 'COQUETO', durations: [5, 10, 15],
      actions: [
        { id: 'kiss', name: 'Besar', zones: all('lips', 'neck', 'ear') },
        { id: 'caress', name: 'Acariciar', zones: all('neck', 'chest', 'abdomen') },
        { id: 'whisper', name: 'Susurrar', zones: all('ear', 'neck') },
        { id: 'massage', name: 'Masajear', zones: all('back') },
        { id: 'tease', name: 'Provocar', zones: all('lips', 'neck', 'ear', 'chest') },
        { id: 'blow', name: 'Soplar suavemente', zones: all('ear', 'neck', 'chest') }
      ],
      zones: [
        { id: 'lips', name: 'Labios' }, { id: 'neck', name: 'Cuello' }, { id: 'ear', name: 'Orejas' },
        { id: 'chest', name: 'Pecho (sobre la ropa)' }, { id: 'abdomen', name: 'Abdomen (sobre la ropa)' }, { id: 'back', name: 'Espalda' }
      ],
      poses: [
        { id: 'front', name: 'Frente a frente', actions: all('kiss', 'caress', 'whisper', 'massage', 'tease', 'blow'), zones: all('lips', 'neck', 'ear', 'chest', 'abdomen', 'back'), art: 'front' },
        { id: 'close', name: 'Abrazo cercano', actions: all('kiss', 'caress', 'whisper', 'tease', 'blow'), zones: all('lips', 'neck', 'ear', 'chest', 'abdomen'), art: 'close' },
        { id: 'seated', name: 'Sentados juntos', actions: all('kiss', 'caress', 'whisper', 'massage', 'tease', 'blow'), zones: all('lips', 'neck', 'ear', 'chest', 'abdomen', 'back'), art: 'seated' },
        { id: 'side', name: 'Recostados de lado', actions: all('kiss', 'caress', 'whisper', 'massage', 'tease'), zones: all('lips', 'neck', 'ear', 'chest', 'abdomen', 'back'), art: 'side' },
        { id: 'near', name: 'Muy cerca', actions: all('kiss', 'caress', 'whisper', 'tease', 'blow'), zones: all('lips', 'neck', 'ear', 'chest', 'abdomen'), art: 'near' }
      ]
    },
    picante: {
      title: 'PICANTE', durations: [10, 20, 30],
      actions: [
        { id: 'passionate', name: 'Besar apasionadamente', zones: all('lips', 'neck', 'ear', 'chest') },
        { id: 'bite', name: 'Morder suavemente', zones: all('neck', 'ear') },
        { id: 'caress', name: 'Acariciar lentamente', zones: all('chest', 'thighs', 'hips') },
        { id: 'tease', name: 'Provocar', zones: all('lips', 'neck', 'ear', 'chest', 'thighs', 'hips') },
        { id: 'clothes', name: 'Jugar con la ropa', zones: all('chest', 'thighs', 'hips') },
        { id: 'explore', name: 'Explorar con las manos', zones: all('chest', 'thighs', 'hips') }
      ],
      zones: [
        { id: 'lips', name: 'Labios' }, { id: 'neck', name: 'Cuello' }, { id: 'ear', name: 'Orejas' },
        { id: 'chest', name: 'Pecho (sobre la ropa)' }, { id: 'thighs', name: 'Muslos (sobre la ropa)' }, { id: 'hips', name: 'Caderas' }
      ],
      poses: [
        { id: 'behind', name: 'Uno detrás del otro', actions: all('passionate', 'bite', 'caress', 'tease', 'clothes', 'explore'), zones: all('neck', 'ear', 'chest', 'thighs', 'hips'), art: 'behind' },
        { id: 'contact', name: 'Sentados con contacto cercano', actions: all('passionate', 'bite', 'caress', 'tease', 'clothes', 'explore'), zones: all('lips', 'neck', 'ear', 'chest', 'thighs', 'hips'), art: 'seated' },
        { id: 'together', name: 'Recostados juntos', actions: all('passionate', 'bite', 'caress', 'tease', 'clothes', 'explore'), zones: all('lips', 'neck', 'ear', 'chest', 'thighs', 'hips'), art: 'side' },
        { id: 'frontclose', name: 'Frente a frente, muy cerca', actions: all('passionate', 'bite', 'caress', 'tease', 'clothes', 'explore'), zones: all('lips', 'neck', 'ear', 'chest', 'thighs', 'hips'), art: 'close' },
        { id: 'standing', name: 'De pie, cuerpo a cuerpo', actions: all('passionate', 'bite', 'caress', 'tease', 'clothes', 'explore'), zones: all('lips', 'neck', 'ear', 'chest', 'thighs', 'hips'), art: 'near' }
      ]
    },
    intenso: {
      title: 'INTENSO', durations: [15, 30, 45, 60],
      actions: [
        { id: 'passionate', name: 'Besar apasionadamente', zones: all('neck', 'chest', 'hips') },
        { id: 'bite', name: 'Morder suavemente', zones: all('neck', 'chest', 'hips') },
        { id: 'explore', name: 'Explorar con las manos', zones: all('chest', 'abdomen', 'thighs', 'hips', 'glutes') },
        { id: 'undress', name: 'Retirar una prenda exterior', zones: all('chest', 'abdomen', 'thighs', 'hips') },
        { id: 'spank', name: 'Dar una nalgada suave', zones: all('glutes', 'thighs') },
        { id: 'surprise', name: 'Sorprender a tu pareja', zones: all('neck', 'chest', 'abdomen', 'thighs', 'hips', 'glutes') }
      ],
      zones: [
        { id: 'neck', name: 'Cuello' }, { id: 'chest', name: 'Pecho (sobre la ropa)' },
        { id: 'abdomen', name: 'Abdomen (sobre la ropa)' }, { id: 'thighs', name: 'Muslos (sobre la ropa)' },
        { id: 'hips', name: 'Caderas' }, { id: 'glutes', name: 'Glúteos (sobre la ropa)' }
      ],
      poses: [
        { id: 'closeface', name: 'Frente a frente, contacto cercano', actions: all('passionate', 'bite', 'explore', 'undress', 'surprise'), zones: all('neck', 'chest', 'abdomen', 'thighs', 'hips'), art: 'close' },
        { id: 'behind', name: 'Uno detrás del otro, de pie', actions: all('passionate', 'bite', 'explore', 'undress', 'spank', 'surprise'), zones: all('neck', 'chest', 'abdomen', 'thighs', 'hips', 'glutes'), art: 'behind' },
        { id: 'seated', name: 'Sentados, contacto de piernas', actions: all('passionate', 'bite', 'explore', 'undress', 'surprise'), zones: all('neck', 'chest', 'abdomen', 'thighs', 'hips'), art: 'seated' },
        { id: 'side', name: 'Recostados, muy cerca', actions: all('passionate', 'bite', 'explore', 'undress', 'spank', 'surprise'), zones: all('neck', 'chest', 'abdomen', 'thighs', 'hips', 'glutes'), art: 'side' },
        { id: 'standing', name: 'De pie, cuerpos próximos', actions: all('passionate', 'bite', 'explore', 'undress', 'spank', 'surprise'), zones: all('neck', 'chest', 'abdomen', 'thighs', 'hips', 'glutes'), art: 'near' }
      ]
    }
  };

  function validateGameData() {
    for (const [level, data] of Object.entries(gameData)) {
      const actionIds = new Set(data.actions.map(item => item.id));
      const zoneIds = new Set(data.zones.map(item => item.id));
      if (data.actions.length !== 6 || data.zones.length !== 6) throw new Error(`${level}: cada dado debe tener seis caras.`);
      for (const action of data.actions) if (!action.zones.length || action.zones.some(id => !zoneIds.has(id))) throw new Error(`${level}: zonas inválidas para ${action.id}.`);
      for (const pose of data.poses) if (!pose.actions.length || !pose.zones.length || pose.actions.some(id => !actionIds.has(id)) || pose.zones.some(id => !zoneIds.has(id))) throw new Error(`${level}: compatibilidad inválida para pose ${pose.id}.`);
      for (const action of data.actions) {
        const compatible = data.zones.some(zone => action.zones.includes(zone.id) && data.poses.some(pose => pose.actions.includes(action.id) && pose.zones.includes(zone.id)));
        if (!compatible) throw new Error(`${level}: la acción ${action.id} no tiene una pose y zona compatibles.`);
      }
    }
  }
  validateGameData();

  const oldModeMap = { soft: 'coqueto', spicy: 'picante' };
  const faceDefaults = {
    actions: gameData.coqueto.actions.map(x => x.name),
    zones: gameData.coqueto.zones.slice(0, 6).map(x => x.name),
    poses: gameData.coqueto.poses.map(x => x.name)
  };
  const defaultSettings = { players: ['Jugador 1', 'Jugador 2'], mode: 'coqueto', sound: false, vibrate: false, animations: true, customActions: [...faceDefaults.actions], customZones: [...faceDefaults.zones], customPoses: [...faceDefaults.poses], customDuration: 0 };
  let settings = loadSettings();
  let currentPlayer = 0, round = 1, lastComboKey = '', currentRoll = null, rolling = false, audioContext = null, toastTimer;
  const history = [];
  const $ = id => document.getElementById(id);
  const screens = ['home-screen', 'consent-screen', 'setup-screen', 'custom-screen', 'game-screen'];

  function copyDefaults() { return { ...defaultSettings, players: [...defaultSettings.players], customActions: [...defaultSettings.customActions], customZones: [...defaultSettings.customZones], customPoses: [...defaultSettings.customPoses] }; }
  function safeName(value, fallback) { return String(value ?? '').trim().slice(0, 18) || fallback; }
  function cleanFaces(values, fallback) { return Array.from({ length: 6 }, (_, i) => String(values?.[i] ?? '').trim().slice(0, 50) || fallback[i % fallback.length]); }
  function loadSettings() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!value || typeof value !== 'object') return copyDefaults();
      const merged = { ...copyDefaults(), ...value };
      merged.players = Array.isArray(value.players) ? [safeName(value.players[0], 'Jugador 1'), safeName(value.players[1], 'Jugador 2')] : [...defaultSettings.players];
      merged.mode = ['coqueto', 'picante', 'intenso', 'custom'].includes(value.mode) ? value.mode : oldModeMap[value.mode] || 'coqueto';
      merged.customActions = cleanFaces(value.customActions, faceDefaults.actions);
      merged.customZones = cleanFaces(value.customZones, faceDefaults.zones);
      merged.customPoses = cleanFaces(value.customPoses, faceDefaults.poses);
      merged.customDuration = Math.max(0, Math.min(60, Number(value.customDuration) || 0));
      return merged;
    } catch (_) { return copyDefaults(); }
  }
  function saveSettings() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)); } catch (_) { showToast('No se pudieron guardar los cambios en este dispositivo.'); } }
  function showScreen(id) { screens.forEach(name => { const element = $(name), active = name === id; element.hidden = !active; element.classList.toggle('active', active); }); window.scrollTo({ top: 0, behavior: settings.animations ? 'smooth' : 'auto' }); }
  function showToast(message) { const toast = $('toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2300); }
  function secureIndex(max) { if (window.crypto?.getRandomValues) { const limit = Math.floor(0x100000000 / max) * max, value = new Uint32Array(1); do { window.crypto.getRandomValues(value); } while (value[0] >= limit); return value[0] % max; } return Math.floor(Math.random() * max); }
  function activeData() {
    if (settings.mode !== 'custom') return gameData[settings.mode];
    // In custom mode, each numbered row is one couple-authored compatible trio.
    const actions = settings.customActions.map((name, i) => ({ id: `custom-action-${i}`, name, zones: [`custom-zone-${i}`] }));
    const zones = settings.customZones.map((name, i) => ({ id: `custom-zone-${i}`, name }));
    const poses = settings.customPoses.map((name, i) => ({ id: `custom-pose-${i}`, name, actions: [`custom-action-${i}`], zones: [`custom-zone-${i}`], art: ['front', 'close', 'seated', 'side', 'near', 'behind'][i] }));
    return { title: 'A MEDIDA', actions, zones, poses, durations: [10, 20, 30] };
  }
  function drawCompatible() {
    const data = activeData(), valid = [];
    for (const action of data.actions) for (const zone of data.zones) {
      if (!action.zones.includes(zone.id)) continue;
      const poses = data.poses.filter(pose => pose.actions.includes(action.id) && pose.zones.includes(zone.id));
      for (const pose of poses) valid.push({ action, zone, pose });
    }
    if (!valid.length) throw new Error('No hay combinaciones compatibles en la configuración actual.');
    let choice = valid[secureIndex(valid.length)], key = `${choice.action.id}|${choice.zone.id}|${choice.pose.id}`, attempts = 0;
    while (key === lastComboKey && valid.length > 1 && attempts < 30) { choice = valid[secureIndex(valid.length)]; key = `${choice.action.id}|${choice.zone.id}|${choice.pose.id}`; attempts++; }
    lastComboKey = key;
    const durations = data.durations;
    choice.duration = settings.customDuration > 0 ? settings.customDuration : durations[secureIndex(durations.length)];
    return choice;
  }
  const poseDrawings = {
    front: '<circle cx="42" cy="21" r="8"/><circle cx="78" cy="21" r="8"/><path d="M42 31v30m0-20 18 10m18-20v30M78 41 60 51m-18 10-8 18m44-18 8 18"/>',
    close: '<circle cx="46" cy="21" r="8"/><circle cx="70" cy="21" r="8"/><path d="M46 31v30m0-21 13 14m11-23v30m0-21L57 44m-11 17-7 18m24-18 7 18"/>',
    seated: '<circle cx="42" cy="19" r="8"/><circle cx="77" cy="19" r="8"/><path d="M42 29v24l-13 13h26m22-37v24l13 13H64m-22-37 16 14 19-14m-35 37-5 13m33-13 5 13"/>',
    side: '<circle cx="41" cy="31" r="8"/><circle cx="78" cy="31" r="8"/><path d="M34 43h24l12 8h20m-49-8 4 20 22 5m11-25-4 20-22 5m-22-25-7 18m52 7 8 11"/>',
    behind: '<circle cx="51" cy="20" r="8"/><circle cx="66" cy="26" r="8"/><path d="M51 30v33m0-22 17 9m-2-16v29m-15 0-8 16m23-16 8 16m-6-29 10 12"/>',
    near: '<circle cx="49" cy="21" r="8"/><circle cx="68" cy="21" r="8"/><path d="M49 31v30m0-21 13 12m6-21v30m0-21L55 42m-6 19-7 18m19-18 7 18"/>'
  };
  function poseSvg(art) { return `<svg viewBox="0 0 120 92" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${poseDrawings[art] || poseDrawings.front}</g></svg>`; }
  function sentenceFor({ action, zone, pose, duration }) {
    const target = ({ lips: 'los labios', neck: 'el cuello', ear: 'la oreja', chest: 'el pecho, por encima de la ropa', abdomen: 'el abdomen, por encima de la ropa', back: 'la espalda', shoulders: 'los hombros', thighs: 'los muslos, por encima de la ropa', hips: 'las caderas', glutes: 'los glúteos, por encima de la ropa' })[zone.id] || zone.name.toLocaleLowerCase('es');
    const instructions = {
      kiss: `Besa ${target} de tu pareja`, passionate: `Bésense apasionadamente, con besos en ${target}`,
      caress: `Acaricia lentamente ${target} de tu pareja`, bite: `Muerde suavemente ${target} de tu pareja`,
      whisper: `Susurra junto a ${target}`, massage: `Masajea ${target} de tu pareja`, tease: `Provoca a tu pareja con caricias o besos en ${target}`,
      approach: `Acércate y mantén el contacto sobre ${target}`, blow: `Sopla suavemente sobre ${target}`,
      clothes: `Juega con la ropa sobre ${target}, con permiso`,
      explore: `Explora con las manos ${target} de tu pareja`, undress: `Retira una prenda exterior que tu pareja elija, solo con un sí claro`,
      surprise: `Sorprende a tu pareja con una opción que ya hayan acordado para ${target}`,
      spank: `Da una nalgada suave sobre la ropa, solo si ambos la desean`
    };
    const directive = instructions[action.id] || `${name}: elijan juntos cómo incluir ${target}`;
    return `${directive} durante ${duration} segundos mientras adoptan la pose: ${pose.name.toLocaleLowerCase('es')}.`;
  }
  function renderDice(combo) {
    setDieText($('action-die').querySelector('.die-value'), combo.action.name);
    setDieText($('zone-die').querySelector('.die-value'), combo.zone.name);
    $('action-die').setAttribute('aria-label', `Dado de acción: ${combo.action.name}`); $('zone-die').setAttribute('aria-label', `Dado de zona: ${combo.zone.name}`);
  }
  function setDieText(element, text) {
    element.textContent = text;
    element.dataset.length = String(text.length);
    element.dataset.size = text.length <= 3 ? 'short' : text.length <= 9 ? 'regular' : text.length <= 15 ? 'medium' : text.length <= 23 ? 'long' : 'tiny';
  }
  function renderPlayers() {
    $('player-one-display').textContent = settings.players[0]; $('player-two-display').textContent = settings.players[1]; $('current-player').textContent = settings.players[currentPlayer];
    $('player-one-badge').classList.toggle('active', currentPlayer === 0); $('player-two-badge').classList.toggle('active', currentPlayer === 1);
    $('round-label').textContent = `RONDA ${round}`; $('mode-label').textContent = activeData().title;
  }
  function customInput(type, index, value, label) { const input = document.createElement('input'); input.type = 'text'; input.maxLength = 50; input.value = value; input.setAttribute('aria-label', `${label} ${index + 1}`); input.dataset.faceType = type; input.placeholder = `${label} ${index + 1}`; return input; }
  function makeCustomFields() {
    const targets = { action: [$('action-fields'), settings.customActions, 'Acción'], zone: [$('zone-fields'), settings.customZones, 'Zona'], pose: [$('pose-fields'), settings.customPoses, 'Pose'] };
    for (const [type, [container, values, label]] of Object.entries(targets)) { container.replaceChildren(); values.forEach((value, i) => container.append(customInput(type, i, value, label))); }
    $('custom-duration').value = settings.customDuration;
  }
  function collectCustomFields() {
    for (const type of ['action', 'zone', 'pose']) {
      const values = [...document.querySelectorAll(`[data-face-type="${type}"]`)].map(input => input.value);
      settings[type === 'action' ? 'customActions' : type === 'zone' ? 'customZones' : 'customPoses'] = cleanFaces(values, faceDefaults[type === 'action' ? 'actions' : type === 'zone' ? 'zones' : 'poses']);
    }
    settings.customDuration = Math.max(0, Math.min(60, Number($('custom-duration').value) || 0)); saveSettings();
  }
  function setResult(combo) {
    $('result-turn').textContent = `TURNO DE ${settings.players[currentPlayer].toLocaleUpperCase('es')}`;
    $('action-result').textContent = combo.action.name.toLocaleUpperCase('es'); $('zone-result').textContent = combo.zone.name.toLocaleUpperCase('es');
    $('pose-result').textContent = combo.pose.name; $('pose-art').innerHTML = poseSvg(combo.pose.art); $('duration-result').textContent = `⏱ ${combo.duration} SEGUNDOS`;
    $('result-sentence').textContent = sentenceFor(combo); $('result-card').hidden = false; $('roll-button').hidden = true; $('result-actions').hidden = false; $('change-hint').hidden = false; renderDice(combo);
  }
  function renderHistory() {
    $('history-count').textContent = String(history.length); const list = $('history-list'); list.replaceChildren();
    if (!history.length) { const li = document.createElement('li'); li.className = 'empty-history'; li.textContent = 'Los últimos resultados de esta sesión.'; list.append(li); return; }
    for (const entry of history) { const li = document.createElement('li'), name = document.createElement('strong'), detail = document.createElement('span'); name.textContent = `${entry.player} · ${entry.outcome}`; detail.textContent = `${entry.action} + ${entry.zone} · ${entry.pose} · ${entry.duration}s`; li.append(name, detail); list.append(li); }
  }
  function resolveTurn(outcome) {
    if (!currentRoll) return;
    history.unshift({ player: settings.players[currentPlayer], action: currentRoll.action.name, zone: currentRoll.zone.name, pose: currentRoll.pose.name, duration: currentRoll.duration, outcome }); history.splice(12); renderHistory();
    currentRoll = null; $('result-card').hidden = true; $('result-actions').hidden = true; $('change-hint').hidden = true; $('roll-button').hidden = false;
    currentPlayer = 1 - currentPlayer; if (currentPlayer === 0) round += 1; renderPlayers();
    if (outcome === 'PASÓ') showToast('Turno pasado. Gracias por comunicarlo.');
  }
  function soundTick() {
    if (!settings.sound || !window.AudioContext) return;
    try { audioContext ??= new AudioContext(); const oscillator = audioContext.createOscillator(), gain = audioContext.createGain(); oscillator.type = 'sine'; oscillator.frequency.value = 300 + secureIndex(250); gain.gain.setValueAtTime(.025, audioContext.currentTime); gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .06); oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(); oscillator.stop(audioContext.currentTime + .06); } catch (_) { /* audio opcional */ }
  }
  function rollDice(isChange = false) {
    if (rolling) return; rolling = true; if (settings.animations) $('dice-area').classList.add('rolling'); $('roll-button').disabled = true;
    const time = settings.animations ? 1400 : 60; let preview;
    if (settings.animations) preview = setInterval(() => { const data = activeData(); renderDice({ action: data.actions[secureIndex(data.actions.length)], zone: data.zones[secureIndex(data.zones.length)] }); soundTick(); }, 90);
    setTimeout(() => { if (preview) clearInterval(preview); $('dice-area').classList.remove('rolling'); currentRoll = drawCompatible(); setResult(currentRoll); $('roll-button').disabled = false; rolling = false; if (settings.vibrate && navigator.vibrate) navigator.vibrate(45); soundTick(); if (isChange) showToast('Resultado cambiado. También pueden pasar.'); }, time);
  }
  function syncSettingsDialog() {
    $('settings-player-one').value = settings.players[0]; $('settings-player-two').value = settings.players[1]; $('sound-toggle').checked = settings.sound; $('vibrate-toggle').checked = settings.vibrate; $('animation-toggle').checked = settings.animations;
    $('settings-mode').value = settings.mode; $('settings-duration').value = settings.customDuration;
  }
  function enterGame() { currentPlayer = 0; round = 1; lastComboKey = ''; currentRoll = null; $('result-card').hidden = true; $('result-actions').hidden = true; $('change-hint').hidden = true; $('roll-button').hidden = false; renderPlayers(); renderHistory(); renderDice({ action: { name: 'ACCIÓN' }, zone: { name: 'ZONA' } }); showScreen('game-screen'); }

  $('start-button').addEventListener('click', () => showScreen('consent-screen')); $('how-button').addEventListener('click', () => $('how-dialog').showModal());
  $('consent-button').addEventListener('click', () => { $('player-one-input').value = settings.players[0]; $('player-two-input').value = settings.players[1]; document.querySelector(`input[name="mode"][value="${settings.mode}"]`).checked = true; showScreen('setup-screen'); });
  $('setup-continue').addEventListener('click', () => { settings.players = [safeName($('player-one-input').value, 'Jugador 1'), safeName($('player-two-input').value, 'Jugador 2')]; settings.mode = document.querySelector('input[name="mode"]:checked').value; if (settings.mode === 'custom') { makeCustomFields(); showScreen('custom-screen'); } else { saveSettings(); enterGame(); } });
  $('custom-start').addEventListener('click', () => { collectCustomFields(); enterGame(); });
  document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showScreen(button.dataset.go)));
  $('roll-button').addEventListener('click', () => rollDice()); $('reroll-button').addEventListener('click', () => { $('result-card').hidden = true; $('result-actions').hidden = true; $('change-hint').hidden = true; rollDice(true); });
  $('done-button').addEventListener('click', () => resolveTurn('HECHO')); $('pass-button').addEventListener('click', () => resolveTurn('PASÓ'));
  $('clear-history').addEventListener('click', () => { history.length = 0; renderHistory(); showToast('Historial borrado.'); });
  $('settings-button').addEventListener('click', () => { syncSettingsDialog(); $('settings-dialog').showModal(); });
  $('save-settings').addEventListener('click', event => { event.preventDefault(); settings.players = [safeName($('settings-player-one').value, 'Jugador 1'), safeName($('settings-player-two').value, 'Jugador 2')]; settings.sound = $('sound-toggle').checked; settings.vibrate = $('vibrate-toggle').checked; settings.animations = $('animation-toggle').checked; settings.mode = $('settings-mode').value; settings.customDuration = Math.max(0, Math.min(60, Number($('settings-duration').value) || 0)); saveSettings(); renderPlayers(); $('settings-dialog').close(); showToast('Preferencias guardadas en este dispositivo.'); });
  $('reset-settings').addEventListener('click', () => { settings = copyDefaults(); saveSettings(); syncSettingsDialog(); $('player-one-input').value = settings.players[0]; $('player-two-input').value = settings.players[1]; showToast('Preferencias restablecidas.'); });
  $('home-link').addEventListener('click', event => { event.preventDefault(); showScreen('home-screen'); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('settings-dialog').open) $('settings-dialog').close(); });
  renderHistory();
})();
