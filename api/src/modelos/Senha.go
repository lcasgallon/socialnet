package modelos

//Senha armazena a senha atual e nova para comparação
type Senha struct {
	Nova  string `json:"nova"`
	Atual string `json:"atual"`
}
