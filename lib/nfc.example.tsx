// @ts-nocheck
// -----------------------------------------------------------------------------
// EXEMPLO / REFERÊNCIA da implementação real de NFC (RF02 gravar / RF03 ler).
// NÃO está conectado ao app ainda. Requer `react-native-nfc-manager` instalado
// e um dev build (expo run:ios|android / EAS) — não funciona no Expo Go.
// Mantido fora de `app/` de propósito: arquivos em `app/` viram rotas e seriam
// empacotados pelo Metro, quebrando o Expo Go enquanto a lib não está instalada.
// -----------------------------------------------------------------------------

import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

const BASE_URL = 'https://mioo.app/t/';

// Inicializa o subsistema NFC (uma vez, na abertura do app)
NfcManager.start();

// RF02 - grava o endereço universal da etiqueta na tag NFC
export async function writeTag(id) {
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    const message = [Ndef.uriRecord(BASE_URL + id)];
    const bytes = Ndef.encodeMessage(message);
    await NfcManager.ndefHandler.writeNdefMessage(bytes);
    return true;                 // estado -> success
  } catch (e) {
    return false;                // estado -> error
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
}

// RF03 - lê uma etiqueta encontrada e devolve o id contido na URL
export async function readTag() {
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    const tag = await NfcManager.getTag();
    const record = tag.ndefMessage[0];
    // decodifica a URL gravada, ex.: https://mioo.app/t/abc123
    const uri = Ndef.uri.decodePayload(record.payload);
    return uri.replace(BASE_URL, '');   // -> 'abc123'
  } finally {
    NfcManager.cancelTechnologyRequest();
  }
}
