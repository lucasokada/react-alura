package med.voll.api.medico;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import med.voll.api.endereco.Endereco;
@Table(name = "medicos")
@Entity(name = "Medico")
@Getter
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Medico {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String nome;
  private String email;
  private String telefone;
  private String crm;

  @Enumerated(EnumType.STRING)
  private Especialidade especialidade;

  @Embedded
  private Endereco endereco;

  private Boolean ativo;

  public void setAtivo(Boolean ativo) {
    this.ativo = ativo;
  }

  public Medico(Long id, String nome, String email, String telefone, String crm,
                Especialidade especialidade, Endereco endereco, Boolean ativo) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.crm = crm;
    this.especialidade = especialidade;
    this.endereco = endereco;
    this.ativo = ativo;
  }

  public void update(DadosAtualizacaoMedico dados) {
    if(dados.nome() != null) {
      this.nome = dados.nome();
    }

    if(dados.telefone() != null) {
      this.telefone = dados.telefone();
    }

    if(dados.endereco() != null) {
      this.endereco.update(dados.endereco());
    }
  }

  public void delete() {
    this.ativo = false;
  }
}
