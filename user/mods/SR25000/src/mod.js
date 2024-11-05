var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const path_1 = __importDefault(require("path"));
class Mod {
    preAkiLoad(container) {
        const logger = container.resolve("WinstonLogger");
        logger.logWithColor("spray and pray", LogTextColor_1.LogTextColor.GREEN);
    }
    postDBLoad(container) {
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const SR25 = tables.templates.items["5df8ce05b11454561e39243b"];
        //---------------------------------------------------------------------------------------------
        //SR-25 changes
        SR25._props.weapFireType.push("fullauto");
        SR25._props.bFirerate = 650;
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map