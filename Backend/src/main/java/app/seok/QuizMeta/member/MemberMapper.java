package app.seok.QuizMeta.member;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MemberMapper {
    void insertMember(Member member);

    List<Member> getMemberAll();

    Member getMemberById(long id);

    Member getMemberByEmail(String email);

    void updateMember(Member member);

    void deleteMember(int id);
}
