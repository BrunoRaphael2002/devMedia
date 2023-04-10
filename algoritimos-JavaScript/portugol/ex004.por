programa
{
	
	funcao inicio()
	{
		real numero 
		real porcentagem 
		real resultado_desconto
		real resultado_juros
			
		escreva("informe o valor : ")
		leia(numero)
		
		escreva("informe a porcentagem : ")
		leia(porcentagem)
		
		
		resultado_desconto = numero * porcentagem
		escreva(numero,"R$ com ",porcentagem,"% de desconto é igual a : " ,resultado_desconto,"R$")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 272; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */