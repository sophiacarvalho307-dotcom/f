function setSimulacao(cenario) {
  const statusBox = document.getElementById('statusBox');
  const timeDisplay = document.getElementById('timeDisplay');
  const statusBadge = document.getElementById('statusBadge');
  const progressBar = document.getElementById('progressBar');
  const statusDesc = document.getElementById('statusDesc');
  const aiTip = document.getElementById('aiTip');
  const notif = document.getElementById('notificationPop');
  const notifText = document.getElementById('notifText');

  let mensagemNotif = '';

  if (cenario === 'normal') {
    statusBox.style.borderColor = '#2ed573';
    statusBadge.style.background = '#2ed573';
    statusBadge.innerText = 'SALA LIBERADA';
    timeDisplay.innerText = '18:40';
    progressBar.style.width = '100%';
    progressBar.style.background = '#2ed573';
    statusDesc.innerText = 'Higienização concluída com sucesso no tempo previsto.';
    aiTip.innerHTML = '💡 <strong>Dica da IA:</strong> Dirija-se à porta da Sala 04 para validar seu QR Code.';
    mensagemNotif = '✅ Sala 04 Liberada! Bom filme.';
  } 
  else if (cenario === 'limpeza') {
    statusBox.style.borderColor = '#ffa500';
    statusBadge.style.background = '#ffa500';
    statusBadge.innerText = 'EM HIGIENIZAÇÃO';
    timeDisplay.innerText = '18:45';
    progressBar.style.width = '60%';
    progressBar.style.background = '#ffa500';
    statusDesc.innerText = 'Equipe trabalhando na limpeza da sala. Liberação estimada em 5 minutos.';
    aiTip.innerHTML = '💡 <strong>Dica da IA:</strong> Restam 5 minutos. Aproveite para ir ao banheiro ou bomboniere.';
    mensagemNotif = '🧹 Sala em higienização. Entrada prevista para 18:45.';
  } 
  else if (cenario === 'atraso') {
    statusBox.style.borderColor = '#ff4757';
    statusBadge.style.background = '#ff4757';
    statusBadge.innerText = 'ATRASO DETECTADO';
    timeDisplay.innerText = '18:54 (+14m)';
    progressBar.style.width = '35%';
    progressBar.style.background = '#ff4757';
    statusDesc.innerText = 'Sessão anterior estendida. A IA recalculou o tempo necessário de preparação.';
    aiTip.innerHTML = '⚠️ <strong>Dica da IA:</strong> Evite filas em pé. Enviaremos um alerta quando a sala estiver pronta.';
    mensagemNotif = '⚠️ Alerta IA: Atraso de 14 min detectado. Aguarde no saguão.';
  }

  notifText.innerText = mensagemNotif;
  notif.classList.add('show');
  setTimeout(() => {
    notif.classList.remove('show');
  }, 3500);
}

window.onload = () => setSimulacao('normal');
