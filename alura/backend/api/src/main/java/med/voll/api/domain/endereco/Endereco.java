package med.voll.api.endereco;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import med.voll.api.medico.DadosAtualizacaoMedico;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Endereco {
  private String logradouro;
  private String bairro;
  private String cep;
  private String numero;
  private String complemento;
  private String cidade;
  private String uf;

  public void update(DadosEndereco dados) {
    if(this.logradouro != null) {
      this.logradouro = dados.logradouro();
    }
    if(this.bairro != null) {
      this.bairro = dados.bairro();
    }
    if(this.cep != null) {
      this.cep = dados.cep();
    }
    if(this.numero != null) {
      this.numero = dados.numero();
    }
    if(this.complemento != null) {
      this.complemento = dados.complemento();
    }
    if(this.cidade != null) {
      this.cidade = dados.cidade();
    }
    if(this.uf != null) {
      this.uf = dados.uf();
    }
  }
}
