import Sectitle from '../../components/SecTitle/SecTitle'
import Teamitem from "../../components/TeamItem/TeamItem"
const Team = () => {
    return (
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="With collaboration and teamwork, we've turned our goals into achievements. Here's to the best team!" />
                <div className="row">
                    <div className="col-lg-3 col-sm-4">
                        <Teamitem teamImage="kevon.jpeg" memberN="Kevon Jaggasar" memberd="CEO, Team Leader " role='CEO' link={"https://www.linkedin.com/in/kevon-jaggassar-14a373224/"} />
                    </div>
                    <div className="col-lg-3 col-sm-4">
                        <Teamitem teamImage="anishkumar.jpeg" memberN="Anishkumar Patel" memberd="CTO, Vice-Team Leader" role='CTO' link={"https://www.linkedin.com/in/anishkumar-patel/"} />
                    </div>
                    <div className="col-lg-3 col-sm-4">
                        <Teamitem teamImage="anis.jpg" memberN="Mahammad Anis Vahora" memberd="Frontend/Backend Specialist " role="Developer" link={""} />
                    </div>
                    <div className="col-lg-3 col-sm-4">
                        <Teamitem teamImage="vikram.jpg" memberN="Vikram Singh" memberd="Frontend/Backend Specialist " role="Developer" link={"https://www.linkedin.com/in/vikram-singh-a9073b1b1/"} />
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Team;