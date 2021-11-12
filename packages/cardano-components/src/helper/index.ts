import CardanoAPI from './CardanoAPI';

const Command = new CardanoAPI(
    CardanoAPI.WalletId(CardanoAPI.Wallet.nami),
    CardanoAPI.BlockfrostId('V0F1fcasqs2CzQfuvP3aQ0L73gfEkk2z'),
    await CardanoAPI.CardanoSerializationLibrary(await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js'))
    )

export const CardanoCommand = Command;

export const CardanoAPIRef = CardanoAPI;