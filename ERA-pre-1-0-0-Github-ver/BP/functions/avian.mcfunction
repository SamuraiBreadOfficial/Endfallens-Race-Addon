execute if entity @a[tag=race_avian] run effect @a[tag=race_avian] jump_boost 1 1 true
replaceitem entity @a[tag=race_avian,hasitem={item=diamond_leggings, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:avian_leggings
replaceitem entity @a[tag=race_avian,hasitem={item=diamond_boots, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:avian_boots
replaceitem entity @a[tag=race_avian,hasitem={item=diamond_helmet, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 race:avian_helmet
execute if entity @a[tag=race_avian] run replaceitem entity @a[tag=has_wings] slot.armor.chest 0 elytra 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute if entity @a[tag=race_avian] run replaceitem entity @a[tag=has_wings] slot.hotbar 8 firework_rocket 1 0 {"minecraft:keep_on_death":{},"minecraft:item_lock":{"mode":"lock_in_slot"}}
clear @a[tag=!has_wings] elytra
