var rodada = 1;
var matriz = Array(3);

matriz['a'] = Array(3);
matriz['b'] = Array(3);
matriz['c'] = Array(3);

matriz['a'][1] = 0;
matriz['a'][2] = 0;
matriz['a'][3] = 0;

matriz['b'][1] = 0;
matriz['b'][2] = 0;
matriz['b'][3] = 0;

matriz['c'][1] = 0;
matriz['c'][2] = 0;
matriz['c'][3] = 0;



$(document).ready( function(){

	$('#btn_iniciar').click( function(){


			//validação dos apelidos
		if ($('#apelido_1').val() == '' ) {
			 alert('Digite o apelido do jogador 1');
			 return false;
		}
		if ($('#apelido_2').val() == '') {
			 alert('Digite o apelido do jogador 2');
			 return false;
		}

		//Exibir apelidos

		$('#nome_jogador_1').html($('#apelido_1').val());
		$('#nome_jogador_2').html($('#apelido_2').val());

		//
		$('#pagina_inicial').hide();
		$('#palco_jogo').show();

	});

	$('.jogada').click( function(){
		var campo_clicado = this.id;
		$('#'+campo_clicado).off();
		jogada(campo_clicado);
	})

	function jogada(id){
		var icone = '';
		var ponto = 0;

		if ((rodada % 2) == 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;
		}else{
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		}

		rodada++;

		$('#'+id).css('background-image', icone);

		var linha_coluna = id.split('-');

		matriz[linha_coluna[0]][linha_coluna[1]] = ponto;

		verificar_combinacao();
	}

	function verificar_combinacao(){
		//verificar horizontal
		pontos = 0;
		for (var i = 1; i <=3; i++) {
			pontos = pontos + matriz['a'][i];
			}

			ganhador(pontos);
			pontos = 0;
			for (var i = 1; i <=3; i++) {
			pontos = pontos + matriz['b'][i];
			}

			ganhador(pontos);
			pontos = 0;
			for (var i = 1; i <=3; i++) {
			pontos = pontos + matriz['c'][i];
			}

			ganhador(pontos);

			//verificar vertical

			pontos = 0;

			for (var l = 1; l <= 3; l++) {
				pontos = 0;
				pontos += matriz['a'][l];
				pontos += matriz['b'][l];
				pontos += matriz['c'][l];

				ganhador(pontos);
			}

			pontos = 0;
			pontos += matriz['a'][1] + matriz['b'][2] + matriz['c'][3];
			ganhador(pontos);
			pontos = 0;
			pontos += matriz['a'][3] + matriz['b'][2] + matriz['c'][1];

			ganhador(pontos);


	}		


	function ganhador(pontos){
		if (pontos == -3) {
			var jogada_1 = $('#apelido_1').val();
			alert(jogada_1 + ' e o Ganhador');
			$('.jogada').off();
		}
		else if (pontos == 3) {
			var jogada_2 = $('#apelido_2').val();
			alert(jogada_2 + ' e o Ganhador');
			$('.jogada').off();
		}

	}


});