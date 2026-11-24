Etheria: Restart - static data extracted from the client (patch 6361569, client 2.0.26)

Source: GameUE_cpp_StandAlone_Data_6361569_P.pak (hot-update pak in PersistentDownloadDir)
  - pak entries are Oodle-compressed but not encrypted (only the pak index is encrypted)
  - entry 00143 = bundle of 10,058 Lua 5.3 bytecode chunks -> 298 config tables (register_config)
  - entries 00144-00158 = text tables per language (en = 00145, th = 00155)

configs/      298 tables, JSON: {config, fields, rows}; text fields filled with English + *_th where a matching text chunk was found
gvg_static_data_th.md   readable GVG summary (Thai)
gvg_skills.json         GVG defender/boss mechanics with Thai + English descriptions
Caveat: these are client-side values; the server can override them.
