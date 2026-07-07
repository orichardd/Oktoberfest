package orichardd.oktoberfest.miscellaneous;

import jakarta.persistence.Embeddable;

import java.time.LocalTime;

@Embeddable
public class Availability {

    private LocalTime startTime;
    private LocalTime endTime;

    public Availability(LocalTime startTime, LocalTime endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Availability() {
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }
}