execute if entity @a[tag=race_dwarf] run replaceitem entity @a[tag=race_dwarf] slot.hotbar 8 race:dwarf_haste 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute if entity @a[tag=race_dwarf] run replaceitem entity @a[tag=race_dwarf] slot.hotbar 7 race:dwarfs_fury 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}
effect @a[tag=race_dwarf] resistance 1 0 true
effect @a[tag=race_dwarf] regeneration 1 0 true
replaceitem entity @a[tag=race_dwarf,hasitem={item=diamond_chestplate, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:dwarfs_chestplate
replaceitem entity @a[tag=race_dwarf,hasitem={item=diamond_boots, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:dwarfs_boots
replaceitem entity @a[tag=race_dwarf,hasitem={item=diamond_leggings, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:dwarfs_leggings
replaceitem entity @a[tag=race_dwarf,hasitem={item=diamond_helmet, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:dwarfs_helmet
