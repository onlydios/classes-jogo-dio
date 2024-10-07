class Hero:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "magia"
        elif self.tipo == "guerreiro":
            ataque = "espada"
        elif self.tipo == "monge":
            ataque = "artes marciais"
        elif self.tipo == "ninja":
            ataque = "shuriken"
        else:
            ataque = "-"

        print(f"o {self.tipo} atacou usando {ataque}")

heroi1 = Hero("Voldemort", 300, "mago")
heroi1.atacar()

heroi2 = Hero("Guts", 87, "guerreiro")
heroi2.atacar()

heroi3 = Hero("Wukong", 32, "monge")
heroi3.atacar()

heroi4 = Hero("Naruto", 25, "ninja")
heroi4.atacar()
